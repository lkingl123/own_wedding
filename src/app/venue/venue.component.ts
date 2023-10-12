import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-venue',
  templateUrl: './venue.component.html',
  styleUrls: ['./venue.component.scss']
})
export class VenueComponent {
  
  @Input() isKL: boolean = true;

  KLRestaurant: string = $localize`Grand Imperial Restaurant`;
  JBRestaurant: string = $localize`Kee Lin Vegetarian Food`;
}
