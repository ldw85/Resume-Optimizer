"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const resume_1 = __importDefault(require("./routes/resume"));
const llm_1 = __importDefault(require("./routes/llm"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
const corsOptions = {
    origin: '*'
};
app.use((0, cors_1.default)(corsOptions));
app.use(body_parser_1.default.json());
app.use('/api', resume_1.default);
app.use('/api', llm_1.default);
//console.log('Express app configured and routes applied.');
app.get('/', (req, res) => {
    res.send('ResumeOptimizer Backend is running!');
});
exports.default = app;
//# sourceMappingURL=app.js.map