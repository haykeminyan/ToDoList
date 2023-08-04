import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {TaskService} from "../../services/task.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  tasks: Task[] = [];
  form: FormGroup = new FormGroup({
  username: new FormControl('', [Validators.required, Validators.maxLength(10)]),
  title: new FormControl('', [Validators.required, Validators.maxLength(20)]),
  description: new FormControl('', [Validators.required, Validators.maxLength(200)]),
  is_done: new FormControl(false),
});
  submitted = false
  constructor(private service: TaskService) { }


  ngOnInit() {
  }
  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }
    this.service.post(this.form.value).subscribe(()=>{this.tasks.push(this.form.value)})
    console.log(this.form.value)
    console.log(this.tasks)
  }

  onReset(): void {
    this.submitted = false;
    this.form.reset();
  }

}
