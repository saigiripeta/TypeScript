var employee = /** @class */ (function () {
    /* constructor(){                                  non parametrized constuctor
      this.empid=101;
      this.empname="saigiri";
      this.empsal=5600;
     }
     */
    function employee(id, name, salary) {
        this.empid = id;
        this.empname = name;
        this.empsal = salary;
    }
    employee.prototype.Display = function () {
        console.log("empid :".concat(this.empid, "  \n               empname :").concat(this.empname, "\n               empsalary:").concat(this.empsal));
    };
    return employee;
}());
//let obj:employee=new employee();
//   obj.Display();
var obj = new employee(123, "saigiri", 657);
obj.Display();
