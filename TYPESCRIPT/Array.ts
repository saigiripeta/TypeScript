function a1(){
    //let courses :string []=["ui","java","oracle ","adv java","angular"];

    let courses:Array<string>=["ui","java","oracle ","adv java","angular"];




    for (let i=0;i<courses.length;i++)
    {
        console.log(courses[i])
    }
   // while(j<courses.length){
   //     console.log([j]);
   // }

   for(let item  of courses)
   {
    console.log(courses)
   }
}
a1();