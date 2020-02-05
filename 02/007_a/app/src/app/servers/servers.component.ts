import { Component, OnInit } from '@angular/core';

@Component({
  //selector: 'app-servers', // standard-selector syntax
  //selector: '[app-servers]', // attribute-selector syntax
  selector: '.app-servers', // class-selector syntax
  // templateUrl: './servers.component.html',
  template: `
    <app-server></app-server>
    `,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
