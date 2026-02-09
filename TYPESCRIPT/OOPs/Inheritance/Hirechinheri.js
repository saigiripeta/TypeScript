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
var ParentOne = /** @class */ (function () {
    function ParentOne() {
    }
    ParentOne.prototype.dialog1 = function () {
        return "Hello world";
    };
    return ParentOne;
}());
var child_one = /** @class */ (function (_super) {
    __extends(child_one, _super);
    function child_one() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.var_chone = "Child One";
        return _this;
    }
    return child_one;
}(ParentOne));
var child_two = /** @class */ (function (_super) {
    __extends(child_two, _super);
    function child_two() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.var_chtwo = "child two";
        return _this;
    }
    return child_two;
}(ParentOne));
var child_three = /** @class */ (function (_super) {
    __extends(child_three, _super);
    function child_three() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.var_chthree = "child three";
        return _this;
    }
    return child_three;
}(ParentOne));
var cobj = new child_one();
console.log(cobj.dialog1(), cobj.var_chone);
var cobj2 = new child_two();
console.log(cobj2.dialog1(), cobj2.var_chtwo);
