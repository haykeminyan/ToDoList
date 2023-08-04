import { Component, OnInit } from '@angular/core';
import {TaskService} from "../../services/task.service";
import {ActivatedRoute, Router} from "@angular/router";
@Component({
  selector: 'app-list-task',
  templateUrl: './list-task.component.html',
  styleUrls: ['./list-task.component.css']
})
export class ListTaskComponent implements OnInit {
  tasks: any = [];
  constructor(    private router: Router,
                  private activeRoute: ActivatedRoute,
                  private service: TaskService) { }

  ngOnInit(): void {
    this.allTasks()
    console.log(this.tasks)
  }

  allTasks(){
    this.service.get().subscribe(
      response => {
        this.tasks = response.body as unknown as Task[]
        console.log(this.tasks)
      }
    )
  }

  deleteTask(id: any) {
    this.service.delete(id).subscribe(()=>{
      this.tasks = this.tasks.filter((value: { id: any; }) => value.id !== id);
    })
  }

}
