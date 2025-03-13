"use strict";
// This is your server file :)
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const page_routes_1 = __importDefault(require(".//routes/page.routes"));
const path_1 = __importDefault(require("path"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
//view engine set to ejs
app.set('view engine', 'ejs');
app.set('views', path_1.default.join(__dirname, '..src/views'));
//middleware
app.use(express_1.default.json());
app.use(express_1.default.static(path_1.default.join(__dirname, 'public')));
app.use(express_1.default.urlencoded({ extended: true }));
//routes
app.use('/', page_routes_1.default);
//404 Fallback
app.use((req, res) => {
    res.status(404).send('Page not found');
});
//Start server
const PORT = process.env.PORT || 5500;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
