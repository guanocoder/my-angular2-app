import { Component, Input } from '@angular/core'
import { ServerModel } from '../models/server';

@Component({
    selector: "app-server",
    templateUrl: "./server.component.html",
    styles: [`
    span.offline {
        color: white;
    }
    `]
})
export class ServerComponent {
    static nodeCount = 1;

    @Input()
    public model: ServerModel;

    constructor() {}

    getServerStatus() {
        return this.model.status;
    }

    getColor() {
        switch(this.model.status) {
            case "online":
                return "lightgreen";
            case "offline":
                return "maroon";
            default:
                return "white";
        }
    }
}