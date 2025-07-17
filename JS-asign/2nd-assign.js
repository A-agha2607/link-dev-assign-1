//1st que
const one=function(){
const userInfo={
name:'abdelrahman',
age:20,
isStudent:true,
skills:['frontend','backend','programming'],
adress:{
    city:'alexandria',
    street:'street',
    number:'77'
}
}
const{name,age,adress:{city}}=userInfo;
console.log('1st question logs')
console.log(name);
console.log(age);
console.log(city);
console.log('\n');
}


//2nd que
const two=function(){
    function add(...nums){
    let sum=0;
    for(let i=0;i<nums.length;i++){
        sum+=nums[i];
    }
    return sum;
}
console.log('2nd question logs');
console.log(add(1,2,3,4));
console.log('\n');
}


//3rd que
const three=function(){
console.log('3rd question logs');
const user={
    id:1,
    username:'ahmed',
    contact:{
        number:1234,
        email:"asd@gmail.com"
    }
    
};
//destructures
const{username,contact:{number}}=user;
console.log(username);
console.log(number);

//spread
const newUser={...user,salary:1234};
console.log("new user using rest:"+newUser);
//rest
const{id,...restInfo}=user;
console.log("user using rest"+restInfo);



console.log('\n');
}


//4th que
const four=function(){
console.log('4th question logs');
const fname="abdelrahman";
const role='intern';
const company='linkdevelopment'

const sent=`hi iam ${fname}.I work as an ${role} in ${company}`;
console.log(sent);
}
console.log(one());
console.log(two());
console.log(three());
console.log(four());