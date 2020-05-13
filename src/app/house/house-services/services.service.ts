import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Service } from './Service';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  services: Service[];
  houseServices: Service[];

  servicesSubject = new BehaviorSubject<Service[]>([]);
  houseServiceSubject = new BehaviorSubject<Service[]>([]);


  constructor(private http: HttpClient) {
    this.services = [];
    this.houseServices = [];
    this.loadServices();
   }

   loadServices() {

    this.http.get(environment.url + '/service').subscribe(
      (data: Service[]) => {
        console.log(data);
        this.services = data,
      this.servicesSubject.next(this.getServices());
    },
      (err) => console.log(err)
    );
   }

   getServices(): Service[] {
     return this.services.slice();
   }

   getServicesId(servicesId: Array<number>) {
    const s = servicesId.map((item) => Number(item));
    this.houseServiceSubject.next(this.services.filter((item) => s.includes(item.sid)));
   }


}
