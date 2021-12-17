const express =require('express');

const router=express.Router();

// const app=express();

// app.use(express.urlencoded({ extended: true }));

const appController=require('../controllers/app_controller');

router.get('/',appController.app);
router.post('/new-task',appController.newtask);
router.post('/delete-tasks',appController.deletetasks);


module.exports=router;