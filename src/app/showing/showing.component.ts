import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { MatTableDataSource } from "@angular/material";

@Component({
  selector: 'app-showing',
  templateUrl: './showing.component.html',
  styleUrls: ['./showing.component.css']
})
export class ShowingComponent implements OnInit {

  showingsTable: any[] = [];
  showingsTableDataSource = new MatTableDataSource(this.showingsTable);
  displayedColumns: string[] = [
    "Host",
    "Description",
    "Time",
    "Address"
  ];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get("URL") //Insert URL here
        .subscribe(response => {
           this.showingsTable = response;
           this.showingsTableDataSource.data = this.showingsTable;
    });
 }

}
