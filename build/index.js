"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var body_parser_1 = __importDefault(require("body-parser"));
var express_1 = __importDefault(require("express"));
require("./controller/DogApiController");
require("./controller/rootControlller");
var appRouter_1 = require("./appRouter");
var app = express_1.default();
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(appRouter_1.AppRouter.getInstance());
app.get('/', function (req, res) {
    res.send("\n    <div>\n    <h1> hey </h1>\n    </div>\n\n  ");
});
app.listen(3000, function () {
    console.log('listen on port 3000');
});
