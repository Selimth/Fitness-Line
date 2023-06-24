
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
            const {username,weight,height,target}=req.body
            try{
               const user= await User.create({username,weight,height,target})
               res.status(201).send(user)
                }
            
            catch(err){
                res.status(500).send(err)
            }
        },
        addExerciceToUser:async (req,res)=>{
            try{ 
               const findUser= await User.findOne({_id:req.params.id})
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
    getOneExercice: async (req,res)=>{
        try{
            const oneUser= await Exercice.findOne({_id:req.params.id})
            res.status(200).send(oneUser)
        }
        catch(err){
            res.status(500).send(err)
        }
    },
    deleteExerciceFromUser:async (req,res)=>{
        try{ 
           const findUser= await User.findOne({_id:req.params.idUs})
           if(findUser){
            for(var elements of findUser.exercices){
                console.log(elements);
            }
            // await findUser.save()
            res.status(201).send(findUser)
           }
           else{
            res.status(401).send("User not found")
           }
        
            
        } 
        
        catch(err){
            res.status(500).send(err)
        }
}
}