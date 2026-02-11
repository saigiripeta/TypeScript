interface interface11{
    product_one:string;
}
interface interface22 extends  interface11{
    product_two:string
}

let obj11 :interface22 ={
    product_one :"Example with the inheritance",
    product_two:"single level inheritance in the interface"
}

console.log(obj11.product_one, obj11.product_two)