var Homepage = /** @class */ (function () {
    function Homepage() {
        this.data = "Hello";
    }
    Homepage.prototype.fun_one = function () {
        return this.data;
    };
    return Homepage;
}());
var obj = new Homepage();
;
console.log(obj.fun_one());
