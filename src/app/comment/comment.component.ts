import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

authorName= "SirBarksALot";
commentContent= "I really don't think this is appropriate for children.\n\nohno...";

  constructor() { }

  ngOnInit() {
  }

}
