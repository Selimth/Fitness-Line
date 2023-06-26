
const {User,Exercice} = require('../database-mongo/Item.model.js');

 module.exports = {
        //! add exercice to data base
        addExercice: async(req,res)=>{
            const{name,duration}=req.body
            try{
               const exercice= await Exercice.create({name,duration})
               res.status(201).send(exercice)
                }
            
            catch(err){
                res.status(500).send(err)
            }
        },
        //!add user to data base
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
        //! add one of the existing exercices to the user's exercices
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
    //!get user's exercices
     getUserExercices:async(req,res)=>{
        try{
            const userdata=await User.findOne({_id:req.params.idUs}).populate("exercices")
            res.status(200).send(userdata.exercices)
        }
        catch(err){
            res.status(500).send(err)
        }
        
        
     },
    //! get all users from data base
    getAllUsers: async (req,res)=>{
        try{
            const users= await User.find()
            res.status(200).send(users)
        }
        catch(err){
            res.status(500).send(err)
        }
    },
    //!get all exercices
    allExercices: async(req,res)=>{
        try{
            const exercices=await Exercice.find({})
            res.status(200).send(exercices)
        }
        catch(err){
            res.status(500).send(err)
        }
    },
    //! update user's calories (caloriesLeft)
    updateCalories: async(req,res)=>{
        try{
            const calo=await User.findOneAndUpdate({_id:req.params.idUs},{caloriesLeft:req.body.caloriesLeft})
            res.status(201).send("Updated Successfully")
        }
        catch(err){
            res.status(500).send(err)
        }
    },
    //!delete exercice from user's exercices
    deleteExerciceFromUser:async (req,res)=>{
        try{ 
           const userFind= await User.findOneAndUpdate({_id:req.params.idUs},{$pull:{exercices:req.params.idEx}})
            res.status(201).send("Updated Successfully")
           }
        catch(err){
            res.status(500).send(err)
        }
}
}