import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import Fireflies from 'node_modules/fireflies.js';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'ng-wedding-eInvitation';
  isKL:boolean = true;

  constructor(@Inject(DOCUMENT) private document: Document) { 
    console.log(this.document.location.href);
    if(this.document.location.href.toLowerCase().indexOf("kl") == -1){
      this.isKL = false;
    }
  }

  ngOnInit(): void {
    Fireflies.initialize(
      15, // the number of fireflies to create, dynamically created based on window size by default
      [5, 30], // use array to specify the minimum and maximum firefly size in px
      [{ fill: '#ffffff', glow: '#eee063' }], //each object represents a possible firefly color styling containing the fill and glow property
      true, // should fireflies interact with each other and the mouse?
      true, // should the glow of fireflies change its intensity over time?
      true, // should the fireflies flicker periodically?
      true // should fireflies weave a web of threads in-between them?
    ) 

  }
  
}
