"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var name1 = "Aneeq Khurram";
console.log(name1);
var x = 30;
var y = 10;
x = 365;
var sum = x + y;
console.log(sum);
var isBegginer = true;
var total = 8.55648;
var name = "Sheikh";
name = "true";
var sentence = "My name is " + name + " \nand I am a Begineer";
console.log(sentence);
console.log(total.toFixed(2));
var n = null;
var u = undefined;
//Array
var person1 = ["Aneeq", 20];
//Enum
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 6] = "Green";
    Color[Color["Blue"] = 7] = "Blue";
})(Color || (Color = {}));
var c = Color.Red;
console.log(c);
//Any Type
var randomValur = 10;
randomValur = true;
randomValur = "Bishwas";
var myVar = 10;
//Tyoe Interfernce
// let b: number = 89;
var b = 21;
// b = "Aneeq";
function add(num1, num2) {
    if (num2 === void 0) { num2 = 10; }
    return num1 + num2;
}
console.log(add(5));
function fullName(pers) {
    console.log(pers.firstName + " " + pers.lastName);
}
var p = {
    firstName: "Aneeq",
    lastName: "Sheikh"
};
fullName(p);
//Class
var Employee = /** @class */ (function () {
    function Employee(name) {
        this.employeeName = name;
    }
    Employee.prototype.greet = function () {
        console.log("Good Morning " + this.employeeName);
    };
    return Employee;
}());
var employee1 = new Employee("Aneeq");
console.log(employee1.employeeName);
employee1.greet;
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(managerName) {
        return _super.call(this, managerName) || this;
    }
    Manager.prototype.delegateWork = function () {
        console.log("Manager delegating tasks");
    };
    return Manager;
}(Employee));
var m1 = new Manager("Bruce");
m1.delegateWork;
m1.greet;
m1.employeeName;
