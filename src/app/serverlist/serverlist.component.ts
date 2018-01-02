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
  serverAdded: boolean = false;

  servers: Array<ServerModel> = [
    new ServerModel("SIT Web01"),
    new ServerModel("UAT Web01")
  ]

  constructor() { }

  ngOnInit() {
  }

  onServerAdded(model: ServerModel) {
    this.serverAdded = true;
    this.servers.push(model);
    if(this.servers.length >= 10)
      this.allowNewServers = false;
  }

  onServerNameInput(nameString: string) {
    this.currentState = `User input is: ${nameString}`;
  }

}
