import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-serverlist',
  templateUrl: '/serverlist.component.html',
  styles: [`
    ul {
      background-color: #eee;
      padding: 4px;
    }
  `]
})
export class ServerlistComponent implements OnInit {

  allowNewServers: boolean = true;
  currentState: string = "Server ready.";

  constructor() { }

  ngOnInit() {
  }

  addServerClick() {
    this.currentState = "Add Server Button Clicked!";
  }

}
