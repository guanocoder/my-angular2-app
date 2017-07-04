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
  serverName: string = "Chilelost";
  serverAdded: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  addServerClick() {
    this.serverAdded = true;
  }

  onInputServerName(event: any) {
    this.currentState = `User input is: ${this.serverName}`;
  }

}
