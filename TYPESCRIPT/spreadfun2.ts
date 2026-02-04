function spreadfun1(param:any, ...param2:any){

    console.log(param,param2)
}

spreadfun1()/// Expeacted atleast one argunment but got 0
spreadfun1(12);                         // 12, []
spreadfun1(123,"saigiri","peta",123)   //123 [ 'saigiri', 'peta', 123 ]