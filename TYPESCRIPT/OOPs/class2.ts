class tsclass{
    private data_one:any;
    private data_two:any;

    constructor(arg1:any,arg2:any){
        this.data_one =arg1;
        this.data_two =arg2
    }

    public function_one():any{
        return this.data_one;
    } 

    public function_two():any{
        return this.data_two;
    }
}

let obj2 = new tsclass("Hello","Saigiri");
console.log(obj2.function_one())
console.log(obj2.function_two())