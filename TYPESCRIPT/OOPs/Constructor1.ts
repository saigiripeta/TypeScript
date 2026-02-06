class constr{

    products:string;
    images:string;
    flags:string

    constructor(){
        this.images="india map"
        this.flags="india",
        this.products="Flag cloth"
    }
}

let obj1 = new constr();
console.log(obj1.images,obj1.flags, obj1.products)