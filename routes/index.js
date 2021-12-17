const express=require('express');

const router=express.Router();


//call your home controller here

const homeController=require('../controllers/home_controller');

router.get('/',homeController.home);
router.use('/app',require('./app'));

module.exports=router;