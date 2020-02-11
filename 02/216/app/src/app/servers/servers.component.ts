import { Component, OnInit } from '@angular/core';

@Component({
  //selector: 'app-servers', // standard-selector syntax
  //selector: '[app-servers]', // attribute-selector syntax
  selector: '.app-servers', // class-selector syntax
  templateUrl: './servers.component.html',
  // template: `
  //   <app-server></app-server>
  //   `,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  private allowNewServer: boolean = false;
  private serverCreationStatus: string = 'No server was created';

  // [09]: Data Starts here and is passed into input in html via [(ngModel)]="serverName"
  private serverName: string = 'initial-server-name';

  // [011]
  private serverCreated: boolean = false;

  // [215]
  private servers = ['Testserver', 'Testserver 2'];

  // [216]
  private secret_password: string = 'tuna';
  private display_secret_password: boolean = true;
  private button_clicks: Array<string> = [];
  private button_click: string;
  private number_of_button_clicks: number = 0;

  constructor() {
    const ms = 2e3;
    setTimeout(() => {
      this.allowNewServer = true;
    }, ms);

  }

  ngOnInit() {
  }

  onCreateServer(): void {

    // [011]
    this.serverCreated = true;

    // [215]
    this.servers.push(this.serverName);



    this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;
    console.log('onCreateServer()');

    const elem = document.getElementById('07_d');
    console.log(elem.innerHTML);
    // https://www.w3schools.com/jsref/dom_obj_all.asp
  }

  // [08]
  onUpdateServerName(event: any): void {
    console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  // [216]
  toggle_password(): void {
    this.display_secret_password = !this.display_secret_password;

    const time = Date.now().toString();
    this.button_clicks.push(time);

    this.number_of_button_clicks++;
  }

  // [216]
  getColor(): string {
    return this.number_of_button_clicks >= 5 ? 'blue' : 'red';
  }


}