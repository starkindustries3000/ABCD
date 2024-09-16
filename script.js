//  Object
// let car={
//     feaTures(){
//         console.log("Auto piolet");
        
//     }
// }

// let traffic = {
//     colorr:"white"
// }

// traffic.__proto__=car

// const employee={
//     calcTax(){
//         console.log("tax rate is 10%");
//     }
// }

// const karan={
//     salary: 5000
// }

// karan._proto_=employee;

// const employee={
//     calcTax(){
//         console.log("tax is 10%");
        
//     }
// }

// const karanArjun={
//     salary: 5000 ,
// }

// karanArjun.__proto__=employee

// let aero=("four years course")

// class user{
//     constructor(name,email){
//         this.name=name,
//         this.email=email
//     }
//     viewdata(){
//         console.log(aero);
        
//     }
// }

// class admin extends user{
//     constructor(name,email)  {
//        super(name,email)
//     }
//     editData (){
//         aero="may be take 5 years"
//     }
// }


// let std1 = new user("omkar","abc@gmail.com")

// let adm1= new admin("admin","admin@gmail.com")


// let promise = new Promise((resolve,reject)=>{
//     console.log("im promise");
//     reject(" some errror");
// })
// function getData(data) {
//     return new  Promise((resolve,reject)=>{
//         setTimeout(() => {
//             console.log("data",data);
//         resolve("success")
//         }, 2000);
//     })
// }

// console.log("fetching data.......");

// (async function(){
//     console.log("fetching data 1.......");
//     await getData(1);
//     console.log("fetching data 2.......");
//     await getData(2);
//     console.log("fetching data 3.......");
//     await getData(3);
//     console.log("fetching data 4.......");
//     await getData(4);
// }) ()

const URL="https://dog.ceo/api/breeds/image/random"

const GetFacts=async ()=> {
    console.log("getting data");
    let response = await fetch(URL)
    console.log(response);
    let data=await response.json()
    console.log(data);
}