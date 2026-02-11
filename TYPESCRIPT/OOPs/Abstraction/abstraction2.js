var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var abs1 = /** @class */ (function () {
    function abs1() {
    }
    abs1.prototype.meth1 = function () {
        return "Meth1 Calling";
    };
    return abs1;
}());
var abschild = /** @class */ (function (_super) {
    __extends(abschild, _super);
    function abschild() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    abschild.prototype.meth2 = function () {
        return "Meth2 calling";
    };
    return abschild;
}(abs1));
var abschild2 = /** @class */ (function (_super) {
    __extends(abschild2, _super);
    function abschild2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    abschild2.prototype.meth3 = function () {
        return "Meth3 calling";
    };
    return abschild2;
}(abschild));
var obj1 = new abschild2();
console.log(obj1.meth1(), obj1.meth2(), obj1.meth3());
