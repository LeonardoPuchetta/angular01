import { Component } from '@angular/core';

//importacion de interfaces
import { HousingLocation } from './housing-location';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'angular01';


  housingLocationList: HousingLocation[] = [
    {
      name: "Elemento 1",
      city: "Nueva York",
      state: "Nueva York",
      photo: "nyc.jpg",
      availableUnits: 10,
      wifi: true,
      laundry: false
    },
    {
      name: "Elemento 2",
      city: "Los Ángeles",
      state: "California",
      photo: "la.jpg",
      availableUnits: 5,
      wifi: false,
      laundry: true
    },
    {
      name: "Elemento 3",
      city: "Chicago",
      state: "Illinois",
      photo: "chicago.jpg",
      availableUnits: 15,
      wifi: true,
      laundry: true
    },
    {
      name: "Elemento 4",
      city: "Miami",
      state: "Florida",
      photo: "miami.jpg",
      availableUnits: 7,
      wifi: true,
      laundry: false
    },
    {
      name: "Elemento 5",
      city: "Nueva York",
      state: "California",
      photo: "sf.jpg",
      availableUnits: 20,
      wifi: false,
      laundry: false
    }
  ]

  selectedLocation : HousingLocation|undefined|null;
  updateSelectedLocation(location:HousingLocation){
    this.selectedLocation = location

  }

}
