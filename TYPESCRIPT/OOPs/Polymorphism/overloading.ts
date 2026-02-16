class Parent1{

    meth1(name:string, initial:string):void;
    meth1(mobile:number, street:string):void;
    meth1(pincode:number, aadharno:number):void;

    meth1(address:any, income:any):void{
        console.log(address, income)
    }
}

let objol = new Parent1();
console.log(objol.meth1("saigiri","Peta"));
console.log(objol.meth1(709566656,"IBS"));
console.log(objol.meth1(500201,8797979));
//console.log(objol.meth1("Ahjje",7898789)); //No overload matches this call