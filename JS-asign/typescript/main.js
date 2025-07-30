"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//all imports from utilis file
const studentUtilis_1 = require("./modules/studentUtilis");
const studentUtilis_2 = __importDefault(require("./modules/studentUtilis"));
let stud = {
    id: '88989',
    name: 'abdelrahman',
    adress: 'jjkjl',
    phoneNumber: '124433',
    email: 'ijfjeif@gmail.com'
};
//print status and welcome message
const status = 'enrolled';
(0, studentUtilis_2.default)(stud.name, stud.id);
//grades array
let grades = [50, 69, 70];
(0, studentUtilis_1.calculateAverage)(grades);
