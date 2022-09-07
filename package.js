// // // // console.log("suraj singh");
// // // // let color=require("colors");
// // // // console.log("suraj pratap".red);
// // // // let chalk=require("chalk")
// // // // console.log(chalk.blue("bgblue"))
// // // console.log("suraj pratap singh rajawat"); 
// // let http=require("http");
// // http.createServer((req,resp)=>{
// //     resp.createHead(200,{'content type': 'applicate\JSON'});
// //     resp.write(JSON.stringify({name:'suraj',email:'surajpsrajawat@gmail.com'}));
// //     resp.end();
// // }).listen(5623);
// let fs=require('fs');
// //const path = require('path');
// let input=process.argv;
// //fs.writeFileSync(input[2],input[3]);
// let path=require("path");
// let dirpath=path.join(__dirname,'files');
// for(i=0;i<5;i++){
//     fs.writeFileSync(dirpath+"/hello"+i+".txt","a simple text file");
// }
// let fs=require('fs');
// let path=require('path');
// let dirpath=path.join(__dirname,"file");
// let filepath=dirpath+"/hello.txt";
// //fs.writeFileSync(filepath,"this is simple file");
// fs.readFile(filepath,"utf-8",(err,item)=>{
//     console.log(item);
// })
// let express=require('express');
// let app=express();
// app.get('',(req,res)=>{
//     res.send('hello this is home page');
// });
// app.get('/about',(req,res)=>{
// res.send('welcome,this is about page');
// });
// app.listen(4598);
// let express=require('express');
// let path=require('path');
// let app=express();
// let publicpath=path.join(__dirname,'publicforhtml');
// //app.use(express.static(publicpath));
// app.get('/public',(req,resp)=>{
//     resp.sendFile('${publicpath}/public.html');
// });
// app.listen(5296);
// let express=require('express');
// let app=express();
// app.set('view engine','ejs');
// app.get('/profile',(req,resp)=>{
//     resp.render('profile','{user}');
//     let user={
//         name:'suraj pratap singh',
//         email:'surajpsrajawat@gmail.com',
//         city: 'jaipur'


//     }
// });
const { request, response } = require('express');
let express=require('express');
let package=express();
let bodyParser = require("body-parser");
package.use(bodyParser.json());
const { default: mongoose, mongo } = require('mongoose');
let app=express();
let middleware=(req,resp,next)=>{
    if(!req.query.age){
        resp.send("please provide age");
    }else{
        next();
    }
    
}
app.use(middleware);
app.get('/',(req,resp)=>{
    resp.send('welcome, home page');
})
app.get('/user',(req,resp)=>{
    resp.send('welcome, user page');

})
mongoose.connect("mongodb+srv://suraj:suraj@cluster0.njbdpja.mongodb.net/surajdb?retryWrites=true&w=majority")
let db= mongoose.connection;
db.on("error",console.error.bind (console, "connection error: "));
db.once("open", function(){
    console.log("connection successfully");
})
let userschema = new mongoose.Schema ({
    name: String,
    age: Number
});
let user =mongoose.model("user", userschema);
app.post("/add_user",async(req,resp) =>{
    let user = new user(request.body);
    await user.save();
    response.send(user);
})
app.listen(8080, function(req,resp){
    console.log("listening of port", 8080);
});