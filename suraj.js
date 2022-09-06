let mongoose=require("mongoose");

let main= async ()=>{
    await mongoose.connect("mongodb+srv://suraj:suraj@cluster0.njbdpja.mongodb.net/surajdb?retryWrites=true&w=majority")
    let procductsch=new mongoose.Schema({
        name:String

    })
    let productmodel= mongoose.model("surajdata",procductsch);
    let data= new productmodel({ name: "suraj"})
    let result= await data.save();
    console.log(result);
}
main();