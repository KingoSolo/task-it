import { Component } from '@angular/core';

interface Task {
  id: number;
  title: string;
  description: string;
  completed: boolean;
  priority: 'low' | 'medium' | 'high';
}

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [],
  templateUrl: './task-list.html',
})

export class TaskList {
  tasks : Task[] = [
    {id : 1, title : "Send email to supervisors", description : "ask them on ways to improve my application", completed : false, priority : 'medium'},
    {id : 2, title : "Work on TypeScript project", description : "complete the project on time", completed : false, priority : 'high'},
    {id : 3, title : "Go to the gym", description : "work out for at least 30 minutes", completed : false, priority : 'low'},
    {id : 4, title : "Learn python", description : "Watch tutorial on Python basics", completed : true, priority : 'medium'},
  ]


//toggle task completion status
toggleTask( taskId : number) : void{
  const task = this.tasks.find(t => t.id === taskId);
  if (task){
    task.completed = !task.completed;
  }
}

//delete task
deleteTask( taskId : number) : void{
  this.tasks = this.tasks.filter( t => t.id !== taskId);
}

//styling for priority levels
getPriorityClass (priority : 'low' | 'medium' | 'high') : string{
  switch (priority){
    case 'low':
      return "text-red-500";
    case 'medium':
      return "text-yellow-500";
    case 'high':
      return "text-green-500";
    default:
      return "border-l-blue-500 bg-blue-50";
  }
}

// Get badge color classes
  getPriorityBadgeClasses(priority: string): string {
    switch(priority) {
      case 'high':
        return 'bg-red-500 text-white';
      case 'medium':
        return 'bg-yellow-500 text-white';
      case 'low':
        return 'bg-green-500 text-white';
      default:
        return 'bg-blue-500 text-white';
    }
  }

}