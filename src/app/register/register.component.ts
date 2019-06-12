import {Component, OnInit} from '@angular/core';
// Import a user model if available
// Import a custom register service


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  username: string;
  password: string;
  password2: string;
  first_name: string;
  last_name: string;
  email: string;

  passwordsMatch: boolean;
  nextForm: boolean = false;

  passwordMatch = () => {
    if (this.password == '' || this.password2 == ''){
      this.passwordsMatch = false;
    } 

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

  // matchForms = () => {
  //   if(this.password != '' && this.passwordConfirm != ''){
  //     if(this.password === this.passwordConfirm){
  //       this.formsMatch = true;
  //     } else this.formsMatch = false;
  //   } else {
  //     this.formsMatch = false;
  //   }
  // }

  nextStep = () => {
      this.nextForm = true;
    }
}

