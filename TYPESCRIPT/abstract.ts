abstract class Employee{
  private empid:number=0;
  private empname:string="";
  private empSal:number=0;

  constructor(id:number,name:string,salary:number){
    this.empid=id;
    this.empname=name;
    this.empSal=Salary;
  }
  abstract calucatesalary(hrs:number);

  public Display(){
    console.log(`empid :${this.empid}
                 empname :${this.empname}
                 salary:${this.empSalary}`);
  }
}
class Trainer extends Employee{
    calucatesalary(hrs:number){
        let total =this.empSal+(hrs*1200);
        console.log("traine sal is :"+total)
    }
}