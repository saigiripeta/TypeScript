function finalfunction(param1:string, param2:string="saigiri", param3?:string, ...param4:any ){
    console.log(param1, param2, param3, param4)
}

//finalfunction();  //Expected at least 1 arguments, but got 0.

finalfunction("saigiri")  //saigiri saigiri undefined []

finalfunction("saigiripeta", "Hello Angular",   "", 1,2,3,4, );  //saigiripeta Hello Angular  [ 1, 2, 3, 4 ]

finalfunction(undefined, undefined, undefined, undefined);  //undefined saigiri undefined [ undefined ]

finalfunction(null, null, null, null);  //null null null [ null ]

