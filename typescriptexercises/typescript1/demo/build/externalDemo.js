"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
}
Object.defineProperty(exports, "__esModule", { value: true });
var node_fetch_1 = __importDefault(require("node-fetch"));
// Remember you need to actually import fetch
var URL = 'https://jsonplaceholder.typicode.com/users/1';
node_fetch_1.default(URL)
    .then(function (r) { return r.json(); })
    .then(function (data) {
    console.log(data.name);
});
//# sourceMappingURL=c:/Users/bloch/Desktop/javascriptfullstack/typescript/demo/build/externalDemo.js.map