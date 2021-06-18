"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var ControllerDec_1 = require("../decoraters/ControllerDec");
var Routes_1 = require("../decoraters/Routes");
var rootController = /** @class */ (function () {
    function rootController() {
    }
    rootController.prototype.getRoot = function (req, res) {
        res.send("\n    <div>\n     <div> DOG API </div>\n     </div>\n    \n      ");
    };
    __decorate([
        Routes_1.get('/')
    ], rootController.prototype, "getRoot", null);
    rootController = __decorate([
        ControllerDec_1.controller('')
    ], rootController);
    return rootController;
}());
