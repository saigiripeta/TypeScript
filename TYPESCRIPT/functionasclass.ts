enum result{
    pass=1,
    fail=-1,
    promoted=0
}
//class in js
function student2(){                       //class
    let stdid :number=10;
    let stdname:string="saigiri";
    let isactive:boolean=true;
    let marks:Array<number>=[35,45,55];    //non primitive data type
    let total:number=0;
    for(var item of marks){
        total+=item;
    }
    let arg :number =total/3;
    let sresult:result=result.pass;
    this.sresult=function(){
        if(arg>35)
        {
            return result.pass;
        }
        else
        {
            return result.fail;
        }
    }
    let dob:[number,string,number]=[22,"feb",2001];
}
let obj =new student2();
console.log(obj.sresult);