// const http = require('http')

const { response } = require("express")

// const server = http.createServer((req,res)=>{
//   if(req.url=="/"){
//    res.end("This is home page");
//   }else if(req.url=="/about"){
//    res.end("This is about page");
//   }

// })

// server.listen(8000,()=>{
//    console.log("Server is running");
// })

// var c = {greeting : "welcome"}
// var d
// d = c

// c.greeting = 'welcome to gibots'
// console.log(c);
// console.log(d);

// var fs = require('fs')
// let filedata
// fs.readFile('Demo.txt', 'utf8', function(err,data){
//   filedata = data;
// })
// console.log(filedata);

// let text ="remove spaces"
// text = text.toString().replace(/s{2,}/,"")
// console.log(text);

// let express = require('express')

// let app = express()

// app.get("/",(req,res)=>{
//   res.send("Hello this is Home Page")
// })

// app.get("/about",(req,res)=>{
//     res.send("Hello this is About Page")
//   })

// app.listen(3000,(res)=>{
//     console.log("listenig at 3000");
// })
// function Person(name, age, job) {
//   this.name = name;
//   this.age = age;
//   this.job = job;
// }

// let person = new Person('John', 30, 'Developer');

// function sum (a){
//   return function(b){
//     return function(c){
//         return a+b+c;
//     }
//   }
// }
// let res = sum(2)(3)(5)
// console.log(res);

// let promise =fetch("https://covid-19.dataflowkit.com/v1/india")

// promise.then((response)=>{
//     console.log(response.status);
//     console.log(response.ok);
//     return response.json()
// }).then((val2)=>{
//     console.log(val2);
// })


let promise = fetch("https://catfact.ninja/fact")

promise.then((response)=>{
    console.log(response.status);
    console.log(response.ok);
    return response.json()
}).then((val)=>{
   console.log(val);
})