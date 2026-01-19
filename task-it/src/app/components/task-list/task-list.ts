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
}
