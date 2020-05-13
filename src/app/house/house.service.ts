import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject, Observable } from 'rxjs';
import { House } from './House';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HouseService {
  house;
  houseSubject = new Subject<any>();

  constructor(private http: HttpClient) {
    this.loadHouse();
  }

  loadHouse() {
    this.http.get('http://localhost:3000/house').subscribe(
      (data) => {
        this.house = data;
        console.log(data);
        this.houseSubject.next(this.getHouse());
      },
      (err) => console.log(err)
    );
  }

  getHouse(): House {
    console.log(this.house);
    return this.house;
    // return JSON.parse(JSON.stringify(this.house));
  }

  addHouse(newHouse) {
    this.http.post('http://localhost:3000/house', newHouse).subscribe(
      (data) => {
        console.log(data);
      },
      (err) => {
        console.log(err);
      }
    );
}

  async addImage(image) {
    const formData = new FormData();
    formData.append('image', image);
    this.http.post('image/upload/house', formData).subscribe((res) => console.log(res));
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
