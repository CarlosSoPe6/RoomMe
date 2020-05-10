import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject, Observable } from 'rxjs';
import { House } from './House';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HouseService {
  house: House;
  houseSubject = new Subject<House>();

  constructor(private http: HttpClient) {
    this.loadHouse();
  }

  loadHouse() {
    this.http.get('http://localhost:3000/house').subscribe(
      (data: House) => {
        this.house = data;
        this.houseSubject.next(this.getHouse());
      },
      (err) => console.log(err)
    );
  }

  getHouse(): House {
    return JSON.parse(JSON.stringify(this.house));
  }

  addHouse(newHouse) {
    this.http.post('http://localhost:3000/house', newHouse).subscribe(
      (data) => {
        console.log(data);
        // maybe load or houseSubject
      },
      (err) => console.log(err)
    );
  }

  editHouse(newHouse) {
    this.http.put('http://localhost:3000/house', newHouse).subscribe(
      (data) => {
        console.log(data);
        // maybe load or houseSubject
      },
      (err) => console.log(err)
    );
  }
}
