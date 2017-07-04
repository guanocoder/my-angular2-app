import { Component } from '@angular/core'

@Component({
    selector: "[app-server]",
    templateUrl: "./server.component.html",
    styles: [`
    span.offline {
        color: white;
    }
    `]
})
export class ServerComponent {
    static nodeCount = 1;
    serverNodeIndex: number = 5;
    serverStatus: string = "offline";

    constructor() {
        this.serverStatus = Math.random() > .5 ? "online" : "offline";
        this.serverNodeIndex = ServerComponent.nodeCount++;
    }

    getServerStatus() {
        return this.serverStatus;
    }

    getColor() {
        switch(this.serverStatus) {
            case "online":
                return "lightgreen";
            case "offline":
                return "maroon";
            default:
                return "white";
        }
    }
}