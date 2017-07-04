import { Component } from '@angular/core'

@Component({
    selector: "[app-server]",
    templateUrl: "./server.component.html"
})
export class ServerComponent {
    serverNodeIndex: number = 5;
    serverStatus: string = "offline";

    constructor() {
        this.serverStatus = Math.random() > .5 ? "online" : "offline";
    }

    getServerStatus() {
        return this.serverStatus;
    }

    getColor() {
        switch(this.serverStatus) {
            case "online":
                return "darkgreen";
            case "offline":
                return "maroon";
            default:
                return "white";
        }
    }
}