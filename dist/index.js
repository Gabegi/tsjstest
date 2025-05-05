"use strict";
console.log("Hello");
let age = 20;
if (age < 50)
    age += 10;
console.log(age);
let sales = 123456789;
let course = "TypeScript";
let is_published = false;
let mytype;
mytype = 1;
mytype = "hello";
let numbers = [];
let user = [1, "Bob"];
const small = 1;
const medium = 2;
const large = 3;
var Size;
(function (Size) {
    Size[Size["small"] = 0] = "small";
    Size[Size["medium"] = 1] = "medium";
    Size[Size["large"] = 2] = "large";
})(Size || (Size = {}));
var Size2;
(function (Size2) {
    Size2[Size2["Small"] = 0] = "Small";
    Size2[Size2["Medium"] = 1] = "Medium";
    Size2[Size2["Large"] = 2] = "Large";
})(Size2 || (Size2 = {}));
var Size3;
(function (Size3) {
    Size3[Size3["Small"] = 2] = "Small";
    Size3[Size3["Medium"] = 3] = "Medium";
    Size3[Size3["Large"] = 4] = "Large";
})(Size3 || (Size3 = {}));
let mySize = Size.large;
console.log(mySize);
//# sourceMappingURL=index.js.map