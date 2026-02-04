function Demo(){
    let stdid:number=10;
    let stdname:string="saigiri";
    let marks:number=45.98;
    let ispass:boolean=true;

   // console.log("student id :"+stdid +",studentName:"+stdname +"student Marks:"+marks +" Result:"+ispass);


   let msg :String=`student id :${stdid},
                     student name:${stdname},
                    student marks:${marks},
                    student resuilt:${ispass}
                    `;

                    console.log(msg);
}
Demo();