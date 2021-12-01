const express=require('express');
const port=8000;
const app=express();

// const Todolist=require('./models/app');

const db=require('./configfile/mogoose');

app.set('view engine','ejs');

app.set('views','./views');

// To access static content in the application
app.use(express.static('Assets'));

app.use(express.urlencoded({extended:true}));

app.use('/',require('./routes/index'));





// app.post('/new-task',function(req,res){

//     //save details in todolist and send to database
//     var mS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
//     var date=req.body.duedate;
//     var dd   = date.substring(8);
//     var mm   = mS[date.substring(5,7)-1]; //January is 0!
//     var yyyy = date.substring(0,4);
//     var formdate=dd+' '+mm+','+' '+yyyy;
//     //console.log(formdate);
//     Todolist.create({
//         description:req.body.description,
//         category:req.body.category,
//         duedate:formdate
//     },function(err,newTask){

//         if(err)
//         {
//             console.log('Error while creating new item in database',err);
//             return;
//         }

//         console.log('************',newTask);
//         return res.redirect('back');
        

//     });

// });


app.get('/delete-task/',function(req,res){

    let id=req.query.id;
    Todolist.findByIdAndDelete(id,function(err){
        if(err)
        {
            console.log("ERROR deleting the task from task list");
            return; 
        }

        return res.redirect('back');
    });
});

// app.post('/delete-tasks',function(req,res)
// {
//     const taskstobeDeleted=req.body.check;

//     if(typeof taskstobeDeleted === "string")
//     {
//         console.log("yes it is single item");
//         Todolist.findByIdAndDelete(taskstobeDeleted,function(err){

//             if(err)
//             {
//                 console.log("Error occored while deleting an item from DB",err);
//                 return;

//             }
//             return res.redirect('back');
            
//         })
        
//     }
//     else if(typeof taskstobeDeleted=== "object")
//     {
//         // console.log("Multiple items selected ");
//         // return res.redirect('back');
        
//         for(let i=0;i<taskstobeDeleted.length;i++)
//         {
//             Todolist.findByIdAndDelete(taskstobeDeleted[i],function(err){

//                 if(err)
//                 {
//                     console.log("Error occred while deleting an item from db for the id",taskstobeDeleted[i],err);
//                     return;

//                 }
                
//             });
//         }

//     }

//     return res.redirect('back');
    
// })



app.listen(port,function(err){

    if(err)
    {
        console.log("Error while seeting up the server",err);
        return;
    }

    console.log('Server is up on port ',port);
})