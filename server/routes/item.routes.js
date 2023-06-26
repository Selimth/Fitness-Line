const router = require('express').Router();
const {addUser,addExercice,addExerciceToUser, deleteExerciceFromUser, getAllUsers,updateCalories} = require("../controllers/item.controller");

router.post("/addUser",addUser)
router.post("/addExercice",addExercice)
router.put("/userExercice/:idUs",addExerciceToUser)
router.get("/getAllUsers",getAllUsers)
router.delete("/:idUs/deleteUserEx/:idEx",deleteExerciceFromUser)
router.put("/caloriesLeft/:idUs",updateCalories)

module.exports = router;
