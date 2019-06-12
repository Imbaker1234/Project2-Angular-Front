import { Component, OnInit } from '@angular/core';
import { RegisterComponent } from 'app/register/register.component';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register2',
  templateUrl: './register2.component.html',
  styleUrls: ['./register2.component.css']
})
export class Register2Component implements OnInit {

  first_name: string;
  last_name: string;
  email: string;

  constructor() { }

  ngOnInit() {
  }

}
