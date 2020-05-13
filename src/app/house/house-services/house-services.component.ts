import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Service } from './Service';
import { ServicesService } from './services.service';



@Component({
  selector: 'app-house-services',
  templateUrl: './house-services.component.html',
  styleUrls: ['./house-services.component.scss']
})
export class HouseServicesComponent implements OnInit {

  services: Service[];
  houseServices: Service[];
  @Input() houseServicesId: number[];
  @Output() updateIds = new EventEmitter();
  selected: number;

  constructor(private serviceService: ServicesService) {
   }

  ngOnInit(): void {
    this.serviceService.getServicesId(this.houseServicesId);
    this.serviceService.servicesSubject.subscribe(
      (data) => {
        this.services = data;
        this.serviceService.getServicesId(this.houseServicesId);
      });
    this.serviceService.houseServiceSubject.subscribe(
      (data) => {
        console.log(data);
        this.houseServices = data;
      }
    );
  }

  addService() {
    this.houseServicesId.push(Number(this.selected));
    this.serviceService.getServicesId(this.houseServicesId);
    this.updateIds.emit(this.houseServicesId);
    console.log(this.houseServices);
  }

  removeService(removeS) {
    const index = this.houseServicesId.findIndex((item) => item === removeS);
    this.houseServicesId.splice(index, 1);
    this.serviceService.getServicesId(this.houseServicesId);
    this.updateIds.emit(this.houseServicesId);
  }

}
