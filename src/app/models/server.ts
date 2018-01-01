export class ServerModel {
    constructor(public readonly name: string,
                public status?: "offline" | "online") {
        if(!status) {
            this.status = (Math.random() > 0.5) ? "online" : "offline";
        }
    }
}