function fun_two(param1:string, param2:string, param3:string):void{

    console.log(param1, param2, param3);

} 
fun_two("Angular","Spring","Sql server");  //Angular Spring Sql server

fun_two(undefined, undefined, undefined);  //undefined undefined undefined

fun_two(null, null, null);  //null null null

//For undefined and null it is showing error but it has executed the output.