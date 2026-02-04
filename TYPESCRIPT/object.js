function c1() {
    var emp;
    emp = {
        empid: 10,
        empname: "saigiri",
        empsalary: 123,
        courses: ["angular"],
        prevemp: {
            precompany: "wipro",
            presalary: 45000
        }
    };
    for (var _i = 0, _a = emp.courses; _i < _a.length; _i++) {
        var item = _a[_i];
        console.log(item);
    }
}
c1();
