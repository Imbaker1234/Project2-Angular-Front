import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-demo-form',
  templateUrl: './demo-form.component.html',
  styleUrls: ['./demo-form.component.css']
})
export class DemoFormComponent implements OnInit {
  myForm: FormGroup;
  career: string;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.myForm = this.fb.group({
      email: '',
      message: '',
      career: ''
    });

    // This logs the changes by returning an observable.
    this.myForm.valueChanges.subscribe(console.log);
  }

}
