import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {animate, state, style, transition} from '@angular/animations';

@Component({
  selector: 'app-material-login',
  templateUrl: './material-login.component.html',
  styleUrls: ['./material-login.component.css']
})
export class MaterialLoginComponent implements OnInit {

  isLinear = true;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  fourthFormGroup: FormGroup;
  fifthFormGroup: FormGroup;
  nextArrow = '../../assets/baseline-arrow_forward_ios-24px.svg';
  backArrow = '../../assets/baseline-arrow_back_ios-24px.svg';
  first = '';
  last = '';
  email = '';
  username = '';
  password = '';
  reviewDetails = false;

  show = false;

  get stateName() {
    console.log('get stateName() called');
    return this.show ? 'show' : 'hide';
  }

  toggle() {
    console.log('toggle() called.');
    this.show = !this.show;
  }


  constructor(private fb: FormBuilder) {
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
