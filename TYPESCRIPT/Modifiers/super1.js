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
var superclass = /** @class */ (function () {
    function superclass(name, age) {
        console.log("".concat(name, ", ").concat(age));
    }
    superclass.prototype.meth2 = function () {
        return "Hello";
    };
    return superclass;
}());
var superchild = /** @class */ (function (_super) {
    __extends(superchild, _super);
    function superchild(name, age, pincode) {
        var _this = _super.call(this, name, age) || this;
        console.log("".concat(name, ", ").concat(age, ",").concat(pincode));
        return _this;
    }
    superchild.prototype.meth3 = function () {
        return _super.prototype.meth2.call(this);
    };
    return superchild;
}(superclass));
var sp2 = new superchild("saigiri", 121, 2);
console.log(sp2.meth2());
console.log(sp2.meth3());
