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
var inabstr = /** @class */ (function () {
    function inabstr() {
    }
    inabstr.prototype.meth1 = function () {
        return "Interface with the child class as a abstraction";
    };
    return inabstr;
}());
var child2 = /** @class */ (function (_super) {
    __extends(child2, _super);
    function child2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    child2.prototype.meth2 = function () {
        return "===>This using the inteface and the abstraction ";
    };
    return child2;
}(inabstr));
var iaobj = new child2();
console.log(iaobj.meth1(), iaobj.meth2());
