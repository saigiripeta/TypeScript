var result;
(function (result) {
    result[result["pass"] = 1] = "pass";
    result[result["fail"] = -1] = "fail";
    result[result["promoted"] = 0] = "promoted";
})(result || (result = {}));
//class in js
function student2() {
    var stdid = 10;
    var stdname = "saigiri";
    var isactive = true;
    var marks = [35, 45, 55]; //non pprimitive data type
    var total = 0;
    for (var _i = 0, marks_1 = marks; _i < marks_1.length; _i++) {
        var item = marks_1[_i];
        total += item;
    }
    var arg = total / 3;
    var sresult = result.pass;
    this.sresult = function () {
        if (arg > 35) {
            return result.pass;
        }
        else {
            return result.fail;
        }
    };
    var dob = [22, "feb", 2001];
}
var obj = new student2();
console.log(obj.sresult);
