import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {TaskService} from "../../services/task.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  tasks: Task[] = [];
  form: FormGroup = new FormGroup({
  username: new FormControl('', Validators.required),
  title: new FormControl('', Validators.required),
  description: new FormControl('', Validators.required),
  is_done: new FormControl(''),
});
  submitted = false
  constructor(private service: TaskService, private formBuilder: FormBuilder) { }


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
  }

  onReset(): void {
    this.submitted = false;
    this.form.reset();
  }

}
