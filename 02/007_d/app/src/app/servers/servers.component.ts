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


    // The MDN (Mozilla Developer Network) offers nice lists of all properties and events of the element you're interested in. Googling for YOUR_ELEMENT properties  or YOUR_ELEMENT events  should yield nice results.
    //
    // https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button

  }

}
