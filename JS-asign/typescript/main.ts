//all imports from utilis file
import { enrollementStatus,calculateAverage} from "./modules/studentUtilis";
import welcomeMessage from "./modules/studentUtilis";
//student interface and implementation
interface student{
    id:string;
    name:string;
    adress:string;
    phoneNumber:string;
    email:string;
}
let stud:student={
    id:'88989',
    name:'abdelrahman',
    adress:'jjkjl',
    phoneNumber:'124433',
    email:'ijfjeif@gmail.com'
}
//print status and welcome message
const status:enrollementStatus='enrolled';
welcomeMessage(stud.name,stud.id);
//grades array
let grades:number[]=[50,69,70];
calculateAverage(grades);


