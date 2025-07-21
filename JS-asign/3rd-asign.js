const users = [

{ id: 1, name: "Mark", age: 25, role: "admin", skills: ["HTML", "CSS"] },

{ id: 2, name: "Sara", age: 20, role: "student", skills: ["JavaScript"] },

{ id: 3, name: "Omar", age: 22, role: "student", skills: ["HTML", "Python"] }

];
//print all users
let printUsers=function(users){
users.forEach(user => {
    console.log(`${user.name}-${user.age}`)  
});
}
//printUsers(users);

//add a user
let addUser=function(){
    const newUser={
       id:4, name: "Nour", age: 23, role: "student", skills: ["CSS"]
    }
    users.push(newUser);
    printUsers(users);

}
//addUser();
//update a users role
let updateRole=function(id){
    //find func returns object where condition is met
   const user= users.find(u=>u.id===id);
   if(user){
    user.role="admin";
   }
   printUsers(users);

}
//updateRole(2);
//delete user by id
let deleteUser=function(id){
    //find index returns index of value where cindition is met
const i=users.findIndex(u=>u.id===id);
    if(i){
        //splice deletes value at a certain index
        users.splice(i,1);
    }
    printUsers(users);

}
//deleteUser(3);
//count admins
let countAdmins=function(){
    let count=0;
    users.forEach(u=>{
        if(u.role==="admin")
            count=count+1;
    })
    console.log(count);
}
countAdmins();

//skills array
let skillsArray=function(){
    //flatmap returns all skills in an array
    //set removes duplicates
    //...new makes the set into an array
    const skills_arr=[...new Set(users.flatMap(u=>u.skills))];
    console.log(skills_arr);
}
skillsArray();

//first user loop
let firstUserLoop=function(){
    const u = users[0];
for (let key in u) {
    //checks if property isnt inherited
  if (u.hasOwnProperty(key)) {
    console.log(`${key}: ${u[key]}`);
  }
}
}
firstUserLoop();
//format printing of users
let formatPrint=function(){
    //loops over all of users array
    users.forEach(u=>{
        //object entries returns array of key pair values
        Object.entries(u).forEach(([key,val])=>{
            //this loop gets each key pair value alone to be printed
            if(Array.isArray(val)){
                //checks if value is an array if so prints in a spec wat
                console.log(`${key}:${val.join(",")}`)
            }
            else{
                 console.log(`${key}:${val}`);
            }
           
        })
        console.log("\n");
    })
}

formatPrint();
console.log(Object.entries(users[0]));
//prevent direct mutation
const copyOfArray = function () {
  let copy_users = users.map(u => ({ ...u }));
  printUsers(copy_users);
};
copyOfArray();
//get total age of users
const totalAge=function(){
const sum = users.reduce((sum, user) => sum + user.age, 0);
console.log("Total age:", sum);
}
totalAge();
