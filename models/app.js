const mongoose=require('mongoose');

const todolistSchema=new mongoose.Schema({
    description:
    {
        type:String,
        required:true
        
    },
    category:
    {
        type:String,
        require:true
    },
    duedate:
    {
        type:String,
        required:true

    
    }

})

//make a collection

const Todolist=mongoose.model('Todolist',todolistSchema);

module.exports=Todolist;