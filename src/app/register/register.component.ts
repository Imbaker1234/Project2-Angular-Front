import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  isLinear = true;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  fourthFormGroup: FormGroup;
  fifthFormGroup: FormGroup;
  first = '';
  last = '';
  email = '';
  username = '';
  password = '';
  reviewDetails = false;

  show = false;

  constructor(private fb: FormBuilder) {
  }

  get stateName() {
    console.log('get stateName() called');
    return this.show ? 'show' : 'hide';
  }

  toggle() {
    console.log('toggle() called.');
    this.show = !this.show;
  }

  ngOnInit() {
    this.firstFormGroup = this.fb.group({
      firstCtrl: ['', Validators.required]
    });

    this.secondFormGroup = this.fb.group({
      secondCtrl: ['', Validators.required]
    });

    this.thirdFormGroup = this.fb.group({
      thirdCtrl: ['', Validators.required]
    });

    this.fourthFormGroup = this.fb.group({
      fourthCtrl: ['', Validators.required]
    });

    this.fifthFormGroup = this.fb.group({
      fifthCtrl: ['', Validators.required]
    });

  }

  submitNewUser() {
    console.log(this.username);
    console.log(this.password);
    console.log(this.first);
    console.log(this.last);
    console.log(this.email);
  }
}
