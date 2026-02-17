interface Interface1<A,B>{
    product1:A;
    product2:B;
}

let obj2 :Interface1<number,number>={
    product1 : 120,
    product2 :130
}

// console.log(obj2.product1);
// console.log(obj2.product2)

class child implements Interface1<any, any>{
    product1: any="Pen Stand";
    product2: any ="Book";
}

let ch = new child();
console.log(ch.product1, ch.product2)