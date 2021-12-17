const Todolist=require('../models/app');

const db=require('../configfile/mogoose');

console.log("Yeah i reached to app_controller");

//************render app view ****************

module.exports.app=function(req,res)
{
    Todolist.find({},function(err,list){

        if(err)
        {
            console.log("Error in retriving the data from data base",err);
            return;
        }

        return res.render('app',
        {
            title:"Todo list",
            Todo_List:list
        });
    });
}

//************Add  a task****************
module.exports.newtask=function(req,res){

    //save details in todolist and send to database
    var mS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
    console.log(req.body);
    var date=req.body.duedate;
    var dd   = date.substring(8);
    var mm   = mS[date.substring(5,7)-1]; //January is 0!
    var yyyy = date.substring(0,4);
    var formdate=dd+' '+mm+','+' '+yyyy;
    console.log(formdate);
    Todolist.create({
        description:req.body.description,
        category:req.body.category,
        duedate:formdate
    },function(err,newTask){
        if(err)
        {
            console.log('Error while creating new item in database',err);
            return;
        }
        console.log('************',newTask);
        return res.redirect('back');
    });
}

//************delete  a task****************

module.exports.deletetasks=function(req,res)
{
    const taskstobeDeleted=req.body.check;

    if(typeof taskstobeDeleted === "string")
    {
        console.log("yes it is single item");
        Todolist.findByIdAndDelete(taskstobeDeleted,function(err){

            if(err)
            {
                console.log("Error occored while deleting an item from DB",err);
                return;

            }
        })
        
    }
    else if(typeof taskstobeDeleted=== "object")
    {
        // console.log("Multiple items selected ");
        // return res.redirect('back');
        
        for(let i=0;i<taskstobeDeleted.length;i++)
        {
            Todolist.findByIdAndDelete(taskstobeDeleted[i],function(err){

                if(err)
                {
                    console.log("Error occred while deleting an item from db for the id",taskstobeDeleted[i],err);
                    return;
                }
                
            });
        }
    }

    return res.redirect('back');
    
}

