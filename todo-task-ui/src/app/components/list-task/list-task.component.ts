import { Component, OnInit } from '@angular/core';
import {TaskService} from "../../services/task.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FormControl} from "@angular/forms";
import {PageEvent} from "@angular/material/paginator";
@Component({
  selector: 'app-list-task',
  templateUrl: './list-task.component.html',
  styleUrls: ['./list-task.component.css']
})
export class ListTaskComponent implements OnInit {
  tasks: any = [];
  page = 1;
  sortOrderControl = new FormControl('');
  searchKey = new FormControl('')
  totalRecords: number = 0
  pageIndex = 0
  pageSize = 5
  constructor(    private router: Router,
                  private activeRoute: ActivatedRoute,
                  private service: TaskService) { }

  ngOnInit(): void {
    this.allTasks('', '', '', this.pageSize, this.pageIndex)
    console.log(this.tasks)
    this.sortOrderControl.valueChanges.subscribe((value) => {
      if (value) {
        let sortResult = this.doSorting(value)
        this.pageIndex = 0
        this.pageSize = 5
        this.allTasks(sortResult.sortColumn, sortResult.sortType, '', this.pageIndex, this.pageSize)
      }
      console.log('!!!')
      console.log(this.tasks)
    });
  }

  doSorting(value: string) {
    let sortColumn: string = '';
    let sortType: string = '';
    if (value.toLowerCase() === 'id-by-desc') {
      sortColumn = '-id';
      sortType = 'desc';
    } else if (value.toLowerCase() === 'id-by-asc') {
      sortColumn = 'id';
      sortType = 'asc';
    }
    else if (value.toLowerCase() === 'name-by-desc') {
      sortColumn = '-name';
      sortType = 'desc';
    }
    else if (value.toLowerCase() === 'name-by-asc') {
      sortColumn = 'name';
      sortType = 'asc';
    }
    // TO DO EXPAND AND ADD ALL FILTERS!

    // this.getApi(sortColumn, sortType, searchKey);
    return {sortColumn, sortType}
  }

  searchByName() {
    let sortResult = this.doSorting(this.sortOrderControl.value ?? '');
    this.pageIndex = 0
    this.pageSize = 5
    this.allTasks(
      sortResult.sortColumn,
      sortResult.sortType,
      this.searchKey.value ?? '',
      this.pageIndex,
      this.pageSize
    );
  }


  allTasks(sortColumn: string, sortType: string, searchKey: string, currentPage:number, pageSize:number){
    this.service.get(sortColumn, sortType, searchKey, (currentPage + 1), pageSize).subscribe(
      response => {
        this.tasks = response.body as unknown as Task[]
        console.log(response)
        console.log(this.tasks)
        this.totalRecords = response.headers.get('content-length')
          ? Math.floor(Number(response.headers.get('content-length'))/this.pageSize)
          : 0;
      }
    )
  }
  handlePageEvent(e: PageEvent) {

    this.pageIndex = e.pageIndex ;
    this.pageSize = e.pageSize;
    console.log(this.pageIndex)
    let sortResult = this.doSorting(this.sortOrderControl.value ?? '');
    this.allTasks(
      sortResult.sortColumn,
      sortResult.sortType,
      this.searchKey.value ?? '',
      this.pageIndex,
      this.pageSize
    );
  }

  deleteTask(id: any) {
    this.service.delete(id).subscribe(()=>{
      this.tasks = this.tasks.filter((value: { id: any; }) => value.id !== id);
    })
  }

}
