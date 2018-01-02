import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { ServerModel } from '../models/server';

@Component({
  selector: 'app-serveradd',
  templateUrl: './serveradd.component.html',
  styleUrls: ['./serveradd.component.css']
})
export class ServeraddComponent implements OnInit {

  @Input("allow-add")
  allowNewServers: boolean = true;

  @Output("on-server-add")
  onServerAdded: EventEmitter<ServerModel> = new EventEmitter();
  @Output("on-input")
  onServerNameInput: EventEmitter<string> = new EventEmitter();

  serverName: string = "";

  constructor() { }

  ngOnInit() {
  }

  addServerClick() {
    //this.serverAdded = true;
    this.onServerAdded.emit(new ServerModel(this.serverName));
  }

  onInputServerName(event: any) {
    this.onServerNameInput.emit(this.serverName);
    //this.currentState = `User input is: ${this.serverName}`;
  }  
}
