import TaskModel from "../models/Task.model.js";

export default class TaskController{
    index(req,res){
        res.render('home');
    }
    getTasks(req,res){
        const tasks=TaskModel.getAll();
        res.render('tasks',{tasks});
    }
    addTask(req,res){
        res.render('addTask');
    }
    postAddTask(req,res){
        const {title,desc,dueDate}=req.body;
        TaskModel.add(title,desc,dueDate);
        const tasks=TaskModel.getAll();
        res.render('tasks',{tasks});
    }
    delete(req,res){
        const title=req.params.title;
        TaskModel.delete(title);
        const tasks=TaskModel.getAll();
        res.render('tasks',{tasks});
    }
    update(req,res){
        const id=req.params.id;
        const taskFound=TaskModel.getById(id);
        res.render('updateTask',{task:taskFound});    
    }
    postUpdate(req,res){
        TaskModel.update(req.body);
        const tasks=TaskModel.getAll();
        res.render('tasks',{tasks});
    }
}