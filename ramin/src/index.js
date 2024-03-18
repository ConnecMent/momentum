//Ts Basic
// variable : 
var personName = "ramin";
var age = 18;
var isStudent = true;
var temp = 10;
temp = "salam";
temp = true;
// function
function sum(num1, num2) {
    return num1 + num2;
}
function greeting(name) {
    console.log("Hello ".concat(name));
}
greeting();
greeting("ramin");
// array
var arr = [1, 2, 3];
var arr1 = ["ramin", "ali", "mohammad"];
// tuple
// like a constant array
var user = ["ramin", "laghaie", 1234];
//enum
var size;
(function (size) {
    size[size["small"] = 5] = "small";
    size[size["medium"] = 10] = "medium";
    size[size["large"] = 15] = "large";
})(size || (size = {}));
;
var tshirtSize = size.medium;
console.log(tshirtSize);
// obj
var employee = {
    id: 1,
    name: "ramin",
    greet: function () {
        console.log("salaam");
    }
};
employee.greet();
