"use strict";
const personName = "ramin";
const age = 18;
const isStudent = true;
function sum(num1, num2) {
    return num1 + num2;
}
function greeting(name) {
    console.log(`Hello ${name}`);
}
greeting("ramin");
const arr = [1, 2, 3];
const arr1 = ["ramin", "ali", "mohammad"];
const user = ["ramin", "laghaie", 1234];
var size;
(function (size) {
    size[size["small"] = 5] = "small";
    size[size["medium"] = 10] = "medium";
    size[size["large"] = 15] = "large";
})(size || (size = {}));
;
const tshirtSize = size.medium;
console.log(tshirtSize);
const employee = {
    id: 1,
    name: "ramin",
    greet: function () {
        console.log("salaam");
    }
};
employee.greet();
