const mongoose=require('mongoose');

//connect to database

mongoose.connect('mongodb://localhost/todo_list_db');


const db=mongoose.connection;

db.on('error',console.error.bind(console,'error connecting to db'));

db.once('open',function()
{
    console.log('Successfully connected to db');
})