import { Component } from '@angular/core';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html'
})
export class ServerComponent {
    server_id: number = 10;
    server_status: string = 'offline';

    getServerID() {
        return this.server_id;
    }

    getServerStatus() {
        return this.server_status;
    }
}