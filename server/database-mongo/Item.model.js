const mongoose = require("mongoose");

const ExercicesSchema=new mongoose.Schema({
  name:String,
  duration:Number,
  status:{type:String,enum:["not_completed","in_progress","done"],default:"not_completed"}
})



const UserSchema = new mongoose.Schema({
  username: {type:String,unique:true},
  weight: Number,
  height: Number,
  target: Number,
  calories:Number,
  caloriesLeft:Number,
  exercices:[{type:mongoose.Types.ObjectId,ref:"Exercice"}]
}); 



const User = mongoose.model("User", UserSchema);
const Exercice=mongoose.model("Exercice",ExercicesSchema);


module.exports = {User,Exercice};