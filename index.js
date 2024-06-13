import express from 'express';
import TaskController from './src/controllers/Task.controller.js';
import path from 'path';
import ejsLayouts from 'express-ejs-layouts';

const server=express();

server.use(express.static('public'));

//parse form data
server.use(express.urlencoded({extended:true}));

server.set('view engine','ejs');
server.set('views',path.join(path.resolve(),'src','views'));

server.use(ejsLayouts);

const taskController=new TaskController();
server.get('/',taskController.index);
server.get('/tasks',taskController.getTasks);
server.get('/addTask',taskController.addTask);
server.post('/postAddTask',taskController.postAddTask);
server.get('/delete/:title',taskController.delete);
server.get('/update/:id',taskController.update);
server.post('/postUpdateTask',taskController.postUpdate);

server.use(express.static('src/views'));

server.listen(3200,()=>{
    console.log("Server is running at port 3200...");
});