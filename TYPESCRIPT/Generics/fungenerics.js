var genfun = /** @class */ (function () {
    function genfun() {
    }
    genfun.prototype.funwithgenerics = function (param1, param2) {
        console.log(param1, param2);
    };
    return genfun;
}());
var obj1 = new genfun();
console.log(obj1.funwithgenerics("====>" + "Function with", "Generics"));
