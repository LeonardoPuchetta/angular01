import { Component,Input,Output,EventEmitter } from '@angular/core';
import { HousingLocation } from '../housing-location';

@Component({
  selector: 'app-housing-list',
  templateUrl: './housing-list.component.html',
  styleUrls: ['./housing-list.component.css']
})
export class HousingListComponent {

  @Input() locationList: HousingLocation[] = [];

  results: HousingLocation[] = [];

  @Output() selectedLocationEvent = new EventEmitter<HousingLocation>

  searchHousingLocation(searchText: string) {

        if(!searchText) return; 

        this.results = this.locationList.filter(
          location => location.city.toLocaleLowerCase().includes(searchText.toLocaleLowerCase())
          )

  }
  selectedHousingLocation(location:HousingLocation){

        this.selectedLocationEvent.emit(location);

  }

}
