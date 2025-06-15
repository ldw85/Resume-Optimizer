"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.supabase = void 0;
const supabase_js_1 = require("@supabase/supabase-js");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY;
if (!supabaseUrl || !supabaseAnonKey) {
    console.error('Supabase URL or Anon Key is not set in environment variables.');
    // Depending on the application's needs, you might want to throw an error here
    // or handle this more gracefully. For now, we'll just log an error.
}
exports.supabase = (0, supabase_js_1.createClient)(supabaseUrl || '', supabaseAnonKey || '');
//# sourceMappingURL=supabaseClient.js.map