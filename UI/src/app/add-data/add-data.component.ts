import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-data',
  templateUrl: './add-data.component.html',
  styleUrls: ['./add-data.component.scss']
})
export class AddDataComponent implements OnInit {
  checkUserLog = false;
  constructor() { }

  ngOnInit() {
    debugger;
    this.checkUser();
  }

  checkUser() {
    debugger;
    if (localStorage.getItem('adminToken')) {
      this.checkUserLog = true;
    }
  }
}
