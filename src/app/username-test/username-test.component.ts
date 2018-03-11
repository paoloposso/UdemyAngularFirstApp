import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-username-test',
  templateUrl: './username-test.component.html',
  styleUrls: ['./username-test.component.css']
})
export class UsernameTestComponent implements OnInit {

  userName = '';

  constructor() { }

  ngOnInit() {
  }

  send() {
    this.userName = '';
  }

}
