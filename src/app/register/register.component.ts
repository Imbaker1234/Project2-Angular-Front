import {Component, OnInit} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  username: string;
  password: string;
  password2: string;

  passwordsMatch: boolean;
  nextForm: boolean = false;

  passwordMatch = () => {
    // if (this.password == '' || this.password2 == ''){
    //   this.passwordsMatch = false;
    // } 

    if (this.password === this.password2){
      this.passwordsMatch = true;
    } else {
      this.passwordsMatch = false;
    }
  }

  constructor() {
    //Insert services in the parameters
  }

  ngOnInit() {
  }

  nextStep = () => {
      this.nextForm = true;
    }
}

