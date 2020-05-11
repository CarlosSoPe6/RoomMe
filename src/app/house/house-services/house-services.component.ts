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
    this.services = this.serviceService.getServices();
    this.serviceService.servicesSubject.subscribe(
      (data) => {
        this.services = data;
      });
    this.serviceService.houseServiceSubject.subscribe(
      (data) => {
        this.houseServices = data;
      }
    );
    console.log(this.houseServicesId);
    this.serviceService.getServicesId(this.houseServicesId);
  }

  addService() {
    console.log(this.houseServices);
    this.houseServicesId.push(Number(this.selected));
    this.serviceService.getServicesId(this.houseServicesId);
    this.updateIds.emit(this.houseServicesId);
  }

  removeService(removeS) {
    const index = this.houseServicesId.findIndex((item) => item === removeS);
    this.houseServicesId.splice(index, 1);
    this.serviceService.getServicesId(this.houseServicesId);
    this.updateIds.emit(this.houseServicesId);
  }

}
