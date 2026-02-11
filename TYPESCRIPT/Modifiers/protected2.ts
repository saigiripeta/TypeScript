class protected2{
    protected var_one :string ='Using this keyword'
}

class protectedchild extends protected2 {
   public var_two  = this.var_one;
}

let pc = new protectedchild();
console.log(pc.var_two) // Using this keyword