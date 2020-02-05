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

  allowNewServer: boolean = false;
  serverCreationStatus: string = 'No server was created';

  // [09]: Data Starts here and is passed into input in html via [(ngModel)]="serverName"
  serverName = 'josh';
  serverName2 = 'josh';

  // [09]: Data is printed to screen below input via string interpolation

  // [09]: When you change the text in the field it triggers the (input)-event which causes its data to be passed into this file

  // [09]: Modified data is then again printed to screen via string interpolation, repeat

  // [09]: Top input field is NOT using two-way data-binding, so the

  // [09]: Another difference is that the method is not called with two way data-binding as was done in the method from [08]

  constructor() {
    const ms = 2e3;
    setTimeout(() => {
      this.allowNewServer = true;
    }, ms);
  }

  ngOnInit() {
  }

  onCreateServer(): void {
    this.serverCreationStatus = 'Server was created!';
    console.log('onCreateServer()');

    // <!-- Which Properties or Events can we bind to? Ans: (basically) All of them. -->
    // <!-- console.log the element to see which properties it has -->
    const elem = document.getElementById('07_d');
    console.log(elem.innerHTML);
    // https://www.w3schools.com/jsref/dom_obj_all.asp
  }

  // [08]
  onUpdateServerName(event: any): void {
    console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}