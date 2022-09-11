
//  const  mongoose = require("mongoose");
// mongoose.connect("mongodb://localhost:27017/ecomm", )
// .then(() => console.log("connection successful...."))
// .catch((error) =>console.log(error));
// const productshchema = new mongoose.Schema({
//              name : { type : String },
//              village : { type : String },
//              town : { type : String },
//              no    : {type: Number },
//              male : { type : Boolean }
//          })
//          const surajdata = new mongoose.model('surajdata', productshchema);
//      let data = new surajdata({
//          name: "surajking"
//      })
//      data.save();
//      const createdocument = async () => {
//         try{
//             const data = new surajdata ({
//                 name: " divya "
//             })
//             const tada = new surajdata ({
//                 name : "suraj",
//                 village : " mohabbatpura",
//                 town : "sanganer",
//                 no    : 987456321,
//                 male : true
//             })
//             const roda = new surajdata ({
//                 name : "honey",
//                 village : " mohabbatpura",
//                 town : "sanganer",
//                 no    : 123456789,
//                 male : true
//             })
//             const ada = new surajdata ({
//                 name : "summer",
//                 village : " muhana ",
//                 town : "sanganer",
//                 no    : 987456321,
//                 male : true
//             })

//             const result = await surajdata.insertMany([data, tada, roda, ada]);
//             console.log(result)
//         } catch (error){
//             console.log(error);
//         }
//      }
//     //  createdocument();
//     // # read document
//     let getdocument = async () => {
//         let result = await surajdata.find({male : true}).select ({name : 1});
//         console.log(result);
//     }
//     //getdocument();
//     const updateDB =async() =>{
//         const surajdata = new mongoose.model('surajdata', productshchema);
//          let data = await surajdata.updateOne(
//             {name : "suraj" },
//             { $set :{ town: "KGF"}}
//          )
//            console.log(data);
//     }
//    // updateDB();
const express =require ("express");
require("./config");
const product = require("./product");
const app = express();
app.use(express.json())
app.post("./create",async(req,resp)=>{
    let data= new product(req.body);
    let result =await data.save();
    console.log(result);
    resp.send(result);
})
app.listen(8888);