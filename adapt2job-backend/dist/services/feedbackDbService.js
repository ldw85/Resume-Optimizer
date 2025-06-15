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
exports.insertFeedback = void 0;
const supabaseClient_1 = require("./supabaseClient");
const insertFeedback = (comment, userId) => __awaiter(void 0, void 0, void 0, function* () {
    const { data, error } = yield supabaseClient_1.supabase
        .from('feedback')
        .insert([
        { comment, user_id: userId }
    ]);
    if (error) {
        console.error('Error inserting feedback:', error);
        throw new Error(`Failed to insert feedback: ${error.message}`);
    }
    return data;
});
exports.insertFeedback = insertFeedback;
//# sourceMappingURL=feedbackDbService.js.map