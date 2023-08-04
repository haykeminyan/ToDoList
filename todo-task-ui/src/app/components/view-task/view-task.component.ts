import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {TaskService} from "../../services/task.service";

@Component({
  selector: 'app-view-task',
  templateUrl: './view-task.component.html',
  styleUrls: ['./view-task.component.css']
})
export class ViewTaskComponent implements OnInit {
  tasks:any[] = []
  constructor(
    private router: Router,
    private activeRoute: ActivatedRoute,
    private service: TaskService
  ) { }

  ngOnInit(): void {
    const id = this.activeRoute.snapshot.queryParams['id']
    this.viewTask(id)
  }

  viewTask(id: number){
    this.service.getTask(id).subscribe(
      response=>{
        return this.tasks.push(response.body as unknown as Task[]);
      }
    )
  }

  deleteTask(id: any) {
    this.service.delete(id).subscribe(()=>{
      this.tasks = this.tasks.filter((value: { id: any; }) => value.id !== id);
    })
  }


}
