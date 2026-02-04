function c1(){
    let emp:{
        empid:number,
        empname:string,
        empsalary:number,
        courses:string[],
        prevemp :{
            precompany:string,
            presalary:number
        }
    };
    emp={
        empid:10,
        empname:"saigiri",
        empsalary:123,
        courses:["angular"],
        prevemp:{
            precompany:"wipro",
            presalary:45000

        }
    }
    for (var item of emp.courses){
        console.log(item );
    }
}
c1();