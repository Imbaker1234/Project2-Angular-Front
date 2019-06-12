import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  password: string = '';
  passwordConfirm: string = '';
  formsMatch: boolean = false;

  constructor() {
  }

  ngOnInit() {
  }

  matchForms = () => {
    if(this.password != '' && this.passwordConfirm != ''){
      if(this.password === this.passwordConfirm){
        this.formsMatch = true;
      } else this.formsMatch = false;
    } else {
      this.formsMatch = false;
    }
  }

}
