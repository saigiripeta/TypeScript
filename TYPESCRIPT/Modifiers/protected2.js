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
var protected2 = /** @class */ (function () {
    function protected2() {
        this.var_one = 'Using this keyword';
    }
    return protected2;
}());
var protectedchild = /** @class */ (function (_super) {
    __extends(protectedchild, _super);
    function protectedchild() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.var_two = _this.var_one;
        return _this;
    }
    return protectedchild;
}(protected2));
var pc = new protectedchild();
console.log(pc.var_two);
