"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteResume = exports.getResumes = exports.saveResume = exports.getUserId = void 0;
const supabaseClient_1 = require("./supabaseClient"); // Import existing supabase client
// Helper function to get authenticated user ID
const getUserId = (req) => {
    // Assuming Clerk populates req.auth with user information
    // Adjust based on your actual auth middleware
    // ClerkExpressWithAuth adds auth property to Request
    // The deprecation warning for req.auth is handled by calling req.auth()
    if (!('auth' in req) || typeof req.auth !== 'function') {
        throw new Error('User not authenticated or auth object is not a function');
    }
    const authObject = req.auth();
    if (!authObject || !authObject.userId) {
        throw new Error('User not authenticated or user ID not found');
    }
    // Return the raw Clerk userId string.
    // The user_id column in Supabase's user_resumes table should be of type TEXT
    // to store this Clerk userId directly, as Supabase RLS policies typically
    // compare auth.uid() (which would be the Clerk userId if integrated) with this column.
    const clerkUserId = authObject.userId;
    return clerkUserId;
};
exports.getUserId = getUserId;
// Service function to save or update a resume
const saveResume = (userId, title, content) => __awaiter(void 0, void 0, void 0, function* () {
    if (!content) {
        throw new Error('Resume content is required');
    }
    // Check current number of resumes for the user
    const { count, error: countError } = yield supabaseClient_1.supabase
        .from('user_resumes')
        .select('*', { count: 'exact' })
        .eq('user_id', userId);
    if (countError) {
        console.error('Error counting resumes:', countError);
        throw new Error('Error checking saved resumes');
    }
    // If 2 or more resumes exist, delete the oldest one
    if (count !== null && count >= 1) {
        const { data: oldestResumes, error: oldestError } = yield supabaseClient_1.supabase
            .from('user_resumes')
            .select('id, created_at')
            .eq('user_id', userId)
            .order('created_at', { ascending: true })
            .limit(1);
        if (oldestError) {
            console.error('Error fetching oldest resume:', oldestError);
            throw new Error('Error managing saved resumes');
        }
        if (oldestResumes && oldestResumes.length > 0) {
            const { error: deleteError } = yield supabaseClient_1.supabase
                .from('user_resumes')
                .delete()
                .eq('id', oldestResumes[0].id);
            if (deleteError) {
                console.error('Error deleting oldest resume:', deleteError);
                throw new Error('Error managing saved resumes');
            }
        }
    }
    // Insert the new resume
    const { data, error: insertError } = yield supabaseClient_1.supabase
        .from('user_resumes')
        .insert([
        {
            user_id: userId,
            title: title || `Resume - ${new Date().toISOString().split('T')[0]}`, // Generate default title if none provided
            content: content,
        },
    ])
        .select(); // Select the inserted data to return it
    if (insertError) {
        console.error('Error inserting resume:', insertError);
        throw new Error('Error saving resume');
    }
    return data[0]; // Return the newly created resume
});
exports.saveResume = saveResume;
// Service function to get user's saved resumes
const getResumes = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    const { data, error } = yield supabaseClient_1.supabase
        .from('user_resumes')
        .select('id, title, content, created_at') // Select necessary fields
        .eq('user_id', userId)
        .order('created_at', { ascending: false }) // Get latest first
        .limit(2); // Limit to the latest 2
    if (error) {
        console.error('Error fetching resumes:', error);
        throw new Error('Error fetching saved resumes');
    }
    return data || []; // Return the resumes or an empty array
});
exports.getResumes = getResumes;
// Service function to delete a saved resume (Optional)
const deleteResume = (userId, resumeId) => __awaiter(void 0, void 0, void 0, function* () {
    const { error } = yield supabaseClient_1.supabase
        .from('user_resumes')
        .delete()
        .eq('id', resumeId)
        .eq('user_id', userId); // Ensure user owns the resume
    if (error) {
        console.error('Error deleting resume:', error);
        // Check if the error is due to not found or not owned
        if (error.code === 'PGRST116') { // Example error code for not found/not owned, verify with Supabase docs
            throw new Error('Resume not found or not owned by user');
        }
        throw new Error('Error deleting resume');
    }
    // For now, assume success if no error
});
exports.deleteResume = deleteResume;
//# sourceMappingURL=resumeService.js.map