import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-serverlist',
  template: `
    <ul>
      Server list:<br/>
      <app-server></app-server>
      <app-server></app-server>
    </ul>
  `,
  styles: [`
    ul {
      background-color: #eee;
      padding: 4px;
    }
  `]
})
export class ServerlistComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
