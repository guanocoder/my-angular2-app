import { Component } from '@angular/core'

@Component({
    selector: "app-server",
    templateUrl: "./server.component.html"
})
export class ServerComponent {
    serverNodeIndex: number = 5;
    serverStatus: string = "offline";

    getServerStatus() {
        return this.serverStatus;
    }
}