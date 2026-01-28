const express = require("express") ;
const foodController = require('../controllers/food.controller') ;
const router = express.Router() ;
const authmiddleware = require('../middlewares/auth.middleware')
const multer = require("multer");

const upload = multer({
    storage : multer.memoryStorage(),

})
/* post /api/food/ [protected] */

router.post('/' ,
                authmiddleware.authFoodPartnermiddleware,
                upload.single("video"),
                foodController.createFood
            );

/*  get /api/food/  [protected] */

router.get('/' ,
    authmiddleware.authCustomerMiddleware ,
    foodController.getFoodItems
)




module.exports = router ; 