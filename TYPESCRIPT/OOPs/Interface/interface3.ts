interface interface3{
    sub_one:string;
    sub_two:string;
    sub_three:string
}

let obj : interface3 ={
    sub_one:"hello",
    sub_two:"interface",
    sub_three:"Example"
}
console.log(obj.sub_one, obj.sub_two, obj.sub_three) //hello interface Example