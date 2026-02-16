class readonly{
    readonly var_1 :string;

    constructor(){
        this.var_1 ="Readonly "
    }
}

let obj = new readonly();
console.log(obj.var_1);

obj.var_1 ="Hello" //Cannot assign to 'var_1' because it is a read-only property.