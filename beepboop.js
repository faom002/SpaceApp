var string = "hello world";
var number = 42;
var bool = true;
var literal = "".concat(string, ", ").concat(number, ", ").concat(bool);
var arr = [1, 2, 3, 4, 5];
// let fds: Jeu =  {
// name: "jan",
// age: 21,
// }
var Colors;
(function (Colors) {
    Colors[Colors["Red"] = 0] = "Red";
    Colors[Colors["Green"] = 1] = "Green";
    Colors[Colors["Blue"] = 2] = "Blue";
})(Colors || (Colors = {}));
var yyy = Colors.Red;
if (yyy === Colors.Red) {
    console.log("Red");
}
var tup = ["jan", 23];
var test = "jan";
var arrowFunction = function (name) {
    return name;
};
console.log(arrowFunction("jan"));
