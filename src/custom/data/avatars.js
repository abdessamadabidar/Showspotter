"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var avatars = fs.readFileSync('assets/avatars');
console.log(avatars);
