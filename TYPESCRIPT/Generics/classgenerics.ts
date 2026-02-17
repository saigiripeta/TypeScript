class Generics<A,B,C>{
    product1:A;
    product2:B;
    product3:C;

    constructor(arg1:A, arg2:B, arg3:C){
        this.product1 = arg1;
        this.product2 = arg2;
        this.product3 = arg3

         console.log(this.product1, this.product2 ,this.product3)
    }

}

let obj = new Generics<string, number, any>("Generics", 12, "Example")

console.log(obj.product1)
