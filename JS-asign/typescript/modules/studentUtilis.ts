//union type of enrollement export
export type enrollementStatus='enrolled'|'graduated'|'onleave';
//greet message function
let welcomeMessage=function(name:string,id:string){
    return console.log("welcome"+name+","+id);

}
export default welcomeMessage;
//calc average function
export function calculateAverage (grades:number[]){
    const sum=grades.reduce((acc,val)=>acc+val,0);
    console.log("average grades are:"+sum/grades.length);
}