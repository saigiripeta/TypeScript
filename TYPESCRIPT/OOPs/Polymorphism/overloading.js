var Parent1 = /** @class */ (function () {
    function Parent1() {
    }
    Parent1.prototype.meth1 = function (address, income) {
        console.log(address, income);
    };
    return Parent1;
}());
var objol = new Parent1();
console.log(objol.meth1("saigiri", "Peta"));
console.log(objol.meth1(709566656, "IBS"));
console.log(objol.meth1(500201, 8797979));
//console.log(objol.meth1("Ahjje",7898789)); //No overload matches this call
