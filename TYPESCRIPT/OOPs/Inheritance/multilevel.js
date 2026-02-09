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
var Parent = /** @class */ (function () {
    function Parent() {
    }
    Parent.prototype.fun_one = function () {
        return "Calling function one";
    };
    return Parent;
}());
var child = /** @class */ (function (_super) {
    __extends(child, _super);
    function child() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    child.prototype.fun_two = function () {
        return "Calling function two";
    };
    return child;
}(Parent));
var subchild = /** @class */ (function (_super) {
    __extends(subchild, _super);
    function subchild() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    subchild.prototype.fun_three = function () {
        return "Calling function three";
    };
    return subchild;
}(child));
var obj = new subchild();
console.log(obj.fun_one(), obj.fun_two(), obj.fun_three());
