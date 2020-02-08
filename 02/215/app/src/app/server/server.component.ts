import { Component } from '@angular/core';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styles: [`
        .online{
            color: white;
        }
    `]
})
export class ServerComponent {
    private readonly rand: number = Math.random();
    server_id: number = Math.floor(this.rand * 100);
    server_status: string = 'offline';

    constructor() {
        this.server_status = this.rand > 0.5 ? 'online' : 'offline';
    }

    getServerID() {
        return this.server_id;
    }

    getServerStatus() {
        return this.server_status;
    }

    getColor() {
        return this.server_status === 'online' ? 'green' : 'red';
    }
}