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
var thisprivate = /** @class */ (function () {
    function thisprivate() {
        this.var_one = "Hello";
        this.var_two = this.var_one;
    }
    thisprivate.prototype.meth1 = function () {
        return "with the this Keyword";
    };
    thisprivate.prototype.meth2 = function () {
        return this.meth1();
    };
    return thisprivate;
}());
var childth = /** @class */ (function (_super) {
    __extends(childth, _super);
    function childth() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return childth;
}(thisprivate));
var objth = new childth();
console.log(objth.meth2());
console.log(objth.var_two);
