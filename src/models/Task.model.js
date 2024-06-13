export default class TaskModel{
    constructor(id,title,desc,dueDate){
        this.id=id;
        this.title=title;
        this.desc=desc;
        this.dueDate=dueDate;
    }
    static getAll(){
        return tasks;
    }
    static add(title,desc,dueDate){
        const id=Math.round(Math.random()*1000);
        tasks.push(new TaskModel(id,title,desc,dueDate));
    }
    static delete(title){
        const index=tasks.findIndex((t)=>t.title==title);
        tasks.splice(index,1);
    }
    static getById(id){
        return tasks.find((t)=>t.id==id);
        
    }
    static update(taskObj){
        const index=tasks.findIndex((t)=>t.id==taskObj.id);
        tasks[index]=taskObj;
    }
}
var tasks=[];