import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../../services/user.service';
import {User} from '../models/user';
import {Router} from '@angular/router';

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
  reviewCardEffect = 'container animated fadeIn';

  constructor(private fb: FormBuilder, private userService: UserService, private router: Router) {
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

  toggleReviewDetails() {
    this.reviewDetails = !this.reviewDetails;
  }

  submitNewUser() {
    this.userService.registerUser(
      new User(
        null,
        this.username,
        this.password,
        this.first,
        this.last,
        this.email,
        null,
        null
      )
    );

    // TODO Add routing method.
    // this.router.navigate(['home']);
    console.log('submitNewUser() called with values of\n' + this.username + '\n' +
      this.password + '\n' + this.first + '\n' + this.last + '\n' + this.email);
  }
}
