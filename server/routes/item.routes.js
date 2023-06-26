const router = require('express').Router();
const {addUser,addExercice,addExerciceToUser, deleteExerciceFromUser, getAllUsers,updateCalories,allExercices,getUserExercices} = require("../controllers/item.controller");

router.post("/addUser",addUser)//*done
router.post("/addExercice",addExercice)//*done
router.put("/userExercice/:idUs",addExerciceToUser)//* done
router.get("/getAllUsers",getAllUsers)//*done
router.get("/allExercices",allExercices)//*done
router.delete("/:idUs/deleteUserEx/:idEx",deleteExerciceFromUser)
router.put("/caloriesLeft/:idUs",updateCalories)//*done
router.get("/getUserExercice/:idUs",getUserExercices)//*done

module.exports = router;
