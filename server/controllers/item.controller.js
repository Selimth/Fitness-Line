
const {User,Exercice} = require('../database-mongo/Item.model.js');

 module.exports = {
        addExercice: async(req,res)=>{
            const{name,duration}=req.body
            try{
               const exercice= await Exercice.create({name,duration})
               res.status(201).send(exercice)
                }
            
            catch(err){
                res.status(500).send(err)
            }
        }
        ,
        addUser:async (req,res)=>{
            const {username,weight,height,target,password,goal,age,gender,calories,caloriesLeft}=req.body
            try{
               const user= await User.create({username,password,weight,height,target,age,gender,goal,calories,caloriesLeft})
               res.status(201).send(user)
                }
            
            catch(err){
                res.status(500).send(err)
            }
        },
        addExerciceToUser:async (req,res)=>{
            try{ 
               const findUser= await User.findOne({_id:req.params.idUs})
               if(findUser){
                findUser.exercices.push(req.body.id)
                await findUser.save()
                res.status(201).send(findUser)
               }
               else{
                res.status(401).send("User not found")
               }
            
                
            } 
            
            catch(err){
                res.status(500).send(err)
            }
    },
    getAllUsers: async (req,res)=>{
        try{
            const users= await User.find()
            res.status(200).send(users)
        }
        catch(err){
            res.status(500).send(err)
        }
    },
    deleteExerciceFromUser:async (req,res)=>{
        try{ 
            console.log("idUs",req.params.idUs);
            console.log("idEx",req.params.idEx);
           const userFind= await User.findOneAndUpdate({_id:req.params.idUs},{$pull:{exercices:req.params.idEx}})
            res.status(201).send("Updated Successfully")
           }
        catch(err){
            res.status(500).send(err)
        }
}
}