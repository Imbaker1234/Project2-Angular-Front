import { Component, OnInit } from '@angular/core';
import { StateService } from 'services/state.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-showings-form',
  templateUrl: './showings-form.component.html',
  styleUrls: ['./showings-form.component.css']
})
export class ShowingsFormComponent implements OnInit {

  isLinear = true;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  description = '';
  time = '';
  address = '';
  reviewDetails = false;

  show = false;
  reviewCardEffect = 'container animated fadeIn';

  constructor(private stateService: StateService, private fb: FormBuilder) { }

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

  }

  toggleReviewDetails() {
    this.reviewDetails = !this.reviewDetails;
  }

  submitNewShowing() {
    console.log(this.description);
    console.log(this.time);
    console.log(this.address);
  }
}
