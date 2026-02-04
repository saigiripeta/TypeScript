let roll : number[] = [1,2,3,4,5];

let empid : Array<number> = [6,7,8,9,10,11,12,13];

roll.forEach( (element:number, index:number)=>{
    console.log(`element value ${element}, index values ${empid[index]}`);
})

var courses : string[] = [`angular`, `react`, `Vue.js`];
var AItools : Array<string> = [`Gemini AI`, `Claude AI`, `Chatgpt`, `Black box Ai`];


courses.forEach((ele:string, index:number)=>{
    console.log(ele,AItools[index])
});


