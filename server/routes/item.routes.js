const router = require('express').Router();
const {addUser,addExercice,addExerciceToUser, deleteExerciceFromUser, getOneUser} = require("../controllers/item.controller");

router.post("/addUser",addUser)
router.post("/addExercice",addExercice)
router.put("/userExercice/:idUs",addExerciceToUser)
router.get("/getOneUser/:idUs",getOneUser)
router.delete("/:idUs/deleteUserEx/:idEx",deleteExerciceFromUser)

module.exports = router;
