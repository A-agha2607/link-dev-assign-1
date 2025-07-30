"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateAverage = calculateAverage;
//greet message function
let welcomeMessage = function (name, id) {
    return console.log("welcome" + name + "," + id);
};
exports.default = welcomeMessage;
//calc average function
function calculateAverage(grades) {
    const sum = grades.reduce((acc, val) => acc + val, 0);
    console.log("average grades are:" + sum / grades.length);
}
