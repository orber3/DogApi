"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var decoraters_1 = require("../decoraters");
var FetchClass_1 = require("../decoraters/FetchClass");
var url = 'https://api.thedogapi.com/v1/breeds';
var options = {
    headers: { 'x-api-key': '197c642d-12e5-45db-9f38-fffae70e1853' }
};
var DogApi = /** @class */ (function () {
    function DogApi() {
    }
    //return a list of breeds
    DogApi.prototype.ListDogs = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var method, apiType, fetch_1, props, data, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        method = decoraters_1.Methods.get;
                        apiType = FetchClass_1.apiTypes.list;
                        fetch_1 = new FetchClass_1.fetchClass(url, options, method, apiType);
                        props = { url: url, options: options, method: method, apiType: apiType };
                        return [4 /*yield*/, fetch_1.Act(props)];
                    case 1:
                        data = _a.sent();
                        res.json(data);
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        res.json(error_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    //return a list by search of breeds by name
    DogApi.prototype.searchDog = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var apiType, method, fetch_2, q, props, data, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        apiType = FetchClass_1.apiTypes.search;
                        method = decoraters_1.Methods.get;
                        fetch_2 = new FetchClass_1.fetchClass(url, options, method, apiType);
                        q = req.query.q;
                        props = { url: url, options: options, method: method, apiType: apiType, q: q };
                        return [4 /*yield*/, fetch_2.Act(props)];
                    case 1:
                        data = _a.sent();
                        res.json(data);
                        return [3 /*break*/, 3];
                    case 2:
                        error_2 = _a.sent();
                        res.json(error_2);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    //return a list of catagories
    DogApi.prototype.ListCata = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var method, apiType, fetch_3, props, data, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        method = decoraters_1.Methods.get;
                        apiType = FetchClass_1.apiTypes.list;
                        fetch_3 = new FetchClass_1.fetchClass(url, options, method, apiType);
                        props = { url: url, options: options, method: method, apiType: apiType };
                        return [4 /*yield*/, fetch_3.Act(props)];
                    case 1:
                        data = _a.sent();
                        res.json(data);
                        return [3 /*break*/, 3];
                    case 2:
                        error_3 = _a.sent();
                        res.json(error_3);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    //post a vote
    DogApi.prototype.votePost = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, image_id, sub_id, value, options_1, method, apiType, fetch_4, props, data, error_4;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        _a = req.body, image_id = _a.image_id, sub_id = _a.sub_id, value = _a.value;
                        options_1 = {
                            headers: { 'content-type': 'application/json', 'x-api-key': '197c642d-12e5-45db-9f38-fffae70e1853' },
                            body: { image_id: image_id, sub_id: sub_id, value: value }
                        };
                        method = decoraters_1.Methods.post;
                        apiType = FetchClass_1.apiTypes.post;
                        fetch_4 = new FetchClass_1.fetchClass(url, options_1, method, apiType);
                        props = { url: url, options: options_1, method: method, apiType: apiType };
                        return [4 /*yield*/, fetch_4.Act(props)];
                    case 1:
                        data = _b.sent();
                        res.json(data);
                        return [3 /*break*/, 3];
                    case 2:
                        error_4 = _b.sent();
                        res.json(error_4);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    //get single favorite dog
    DogApi.prototype.FavoriteDog = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var url_1, apiType, method, fetch_5, q, props, data, error_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        url_1 = 'https://api.thedogapi.com/v1/favourites/';
                        apiType = FetchClass_1.apiTypes.SingleId;
                        method = decoraters_1.Methods.get;
                        fetch_5 = new FetchClass_1.fetchClass(url_1, options, method, apiType);
                        q = req.params.id;
                        props = { url: url_1, options: options, method: method, apiType: apiType, q: q };
                        return [4 /*yield*/, fetch_5.Act(props)];
                    case 1:
                        data = (_a.sent()).data;
                        res.json(data);
                        return [3 /*break*/, 3];
                    case 2:
                        error_5 = _a.sent();
                        res.json(error_5);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    //delete a single vote
    DogApi.prototype.DeleteVote = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var url_2, apiType, method, fetch_6, q, props, data, error_6;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        url_2 = 'https://api.thedogapi.com/v1/votes';
                        apiType = FetchClass_1.apiTypes.del;
                        method = decoraters_1.Methods.del;
                        fetch_6 = new FetchClass_1.fetchClass(url_2, options, method, apiType);
                        q = req.params.id;
                        console.log(q);
                        props = { url: url_2, options: options, method: method, apiType: apiType, q: q };
                        return [4 /*yield*/, fetch_6.Act(props)];
                    case 1:
                        data = _a.sent();
                        res.json(data);
                        return [3 /*break*/, 3];
                    case 2:
                        error_6 = _a.sent();
                        res.json(error_6);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    __decorate([
        decoraters_1.get('/listBreeds')
    ], DogApi.prototype, "ListDogs", null);
    __decorate([
        decoraters_1.get('/search')
    ], DogApi.prototype, "searchDog", null);
    __decorate([
        decoraters_1.get('/listCata')
    ], DogApi.prototype, "ListCata", null);
    __decorate([
        decoraters_1.post('/createVote'),
        decoraters_1.bodyValidator('image_id', 'sub_id', 'value')
    ], DogApi.prototype, "votePost", null);
    __decorate([
        decoraters_1.get('/favouriteDog/:id')
    ], DogApi.prototype, "FavoriteDog", null);
    __decorate([
        decoraters_1.del('/votes/:id')
    ], DogApi.prototype, "DeleteVote", null);
    DogApi = __decorate([
        decoraters_1.controller('/dogs')
    ], DogApi);
    return DogApi;
}());
