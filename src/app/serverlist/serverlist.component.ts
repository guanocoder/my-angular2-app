import { Component, OnInit } from '@angular/core';
import { ServerModel } from "../models/server";

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

  servers: Array<ServerModel> = [
    new ServerModel("SIT Web01"),
    new ServerModel("UAT Web01")
  ]

  constructor() { }

  ngOnInit() {
  }

  addServerClick() {
    this.serverAdded = true;
    this.servers.push(new ServerModel(this.serverName));
  }

  onInputServerName(event: any) {
    this.currentState = `User input is: ${this.serverName}`;
  }

}
