import {Component, OnInit} from '@angular/core';
import {StateService} from '../../services/state.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  userRole: number;
  authorName = 'SirBarksALot';
  commentContent = 'I really don\'t think this is appropriate for children.\n\nohno...';

  constructor(private stateService: StateService) {
    this.userRole = this.stateService.stateUser.role;
  }

  ngOnInit() {
  }

}
