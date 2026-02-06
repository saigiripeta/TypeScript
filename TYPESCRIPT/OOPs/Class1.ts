class Homepage{
   private data:string="Hello";

   public fun_one():string{
        return this.data;
    }
}

let obj = new Homepage();

;
console.log(obj.fun_one())