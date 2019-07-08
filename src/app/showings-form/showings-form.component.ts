import { Component, OnInit } from '@angular/core';
import { StateService } from 'services/state.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Showing } from 'app/models/showing';
import { ShowingService } from 'services/showing.service'

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

  constructor(private stateService: StateService, private fb: FormBuilder, private showingService: ShowingService) { }

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

  // submitNewShowing() {
  //   this.showingService.addShowing(
  //     new Showing(
  //       null,
  //       null, //This corresponds to the user object, may need to refactor
  //       this.description,
  //       this.time,
  //       this.address,
  //     )
  //   );

  //   // Return the user to the dashboard after successful submission
  //   // this.router.navigate(['user-dashboard']);
  // }
}
