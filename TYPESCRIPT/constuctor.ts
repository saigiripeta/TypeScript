class employee{
    empid:number;
    empname:string;
    empsal:number;

  /* constructor(){                                  non parametrized constuctor
    this.empid=101;
    this.empname="saigiri";
    this.empsal=5600;
   }
   */

   constructor(id:number,name:string,salary:number){       //with parameterized constuctor
    this.empid=id;
    this.empname=name;
    this.empsal=salary;
   }


   Display():void{
   console.log(`empid :${this.empid}  
               empname :${this.empname}
               empsalary:${this.empsal}`);
   }
}
//let obj:employee=new employee();
//   obj.Display();

let obj :employee=new employee(123,"saigiri",657);
obj.Display();