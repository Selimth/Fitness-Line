const router = require('express').Router();
const {addUser,addExercice,addExerciceToUser, getOneExercice, deleteExerciceFromUser} = require("../controllers/item.controller");

router.post("/addUser",addUser)
router.post("/addExercice",addExercice)
router.put("/userExercice/:idEx",addExerciceToUser)
router.get("/getOneExercice/:idEx",getOneExercice)
router.delete("/deleteUserEx/:idUs/idEx",deleteExerciceFromUser)

module.exports = router;
