import { Component, OnInit } from '@angular/core';
import {TaskService} from "../../services/task.service";
@Component({
  selector: 'app-list-task',
  templateUrl: './list-task.component.html',
  styleUrls: ['./list-task.component.css']
})
export class ListTaskComponent implements OnInit {

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    console.log('!!')
    this.getApi()
  }
  getApi() {
    this.taskService.get().subscribe((response: any) => {
      console.log(response)
    });
  }
}
