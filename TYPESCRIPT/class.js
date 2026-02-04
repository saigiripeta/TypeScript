var student1 = /** @class */ (function () {
    function student1() {
        this.sid = 101;
        this.sname = "saigiri";
        this.isactive = true;
        this.armarks = [45, 55, 65];
    }
    student1.prototype.calucatetotalmarks = function () {
        var total = 0;
        for (var _i = 0, _a = this.armarks; _i < _a.length; _i++) {
            var item = _a[_i];
            total += item;
        }
        return total;
    };
    student1.prototype.calucateresult = function () {
        var total = this.calucatetotalmarks();
        var avg = total / 3;
        if (avg > 35) {
            return "pass";
        }
        else {
            return "fail";
        }
    };
    student1.prototype.greet = function (name) {
        console.log("welcome" + this.sname);
    };
    return student1;
}());
var obj1 = new student1();
console.log(obj1.calucatetotalmarks());
obj1.greet("saigiri");
