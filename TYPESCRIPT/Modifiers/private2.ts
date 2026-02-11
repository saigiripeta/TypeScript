class private2{
    private var_one :string ="Private varibale"
}

class childp extends private2{}
let objp1 = new childp();

objp1.var_one; //var_one' is private and only accessible within class 'private2'

 