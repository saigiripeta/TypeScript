interface multiple_interface{
    multiple_one():number;
}
interface multiple_interface2{
    multiple_two():number;
}

interface multiple_interface3 extends multiple_interface,multiple_interface2{
       multiple_three():number;
} 

let multiple : multiple_interface3 ={
    multiple_one:  ()=>{
        return 100
    },
    multiple_two: ()=>{
        return 200
    },
    multiple_three:()=>{
   return 300
    }

}

console.log(multiple.multiple_one(), multiple.multiple_two(), multiple.multiple_three())
    