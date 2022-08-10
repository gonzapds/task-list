import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/components/Tasks';
import { TASKS } from 'src/app/components/mock-tasks';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  tasks:Task[]=TASKS;

  constructor() { }

  ngOnInit(): void {
  }

}
