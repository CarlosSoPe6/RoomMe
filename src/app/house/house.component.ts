import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { House } from './House';
import { HouseService } from './house.service';
import { HouseUserService } from './house-users/house-user.service';

@Component({
  selector: 'app-house',
  templateUrl: './house.component.html',
  styleUrls: ['./house.component.scss']
})
export class HouseComponent implements OnInit {

  mode: string;
  house;
  image;

  @ViewChild('f') form: NgForm;

  constructor(private router: Router,
              private houseService: HouseService,
              private houseUserService: HouseUserService) {
    this.mode = this.router.url;
    this.house = '';
  }

  ngOnInit(): void {
    if (this.mode === '/house/register') {
      this.house = new House('', '', '', '', '', '', '', 0, 1, '', '', '', []);
    } else {
      this.house = this.houseService.getHouse();

      this.houseService.houseSubject.subscribe(
        (data) => {
          console.log(data);
          this.house = data;
        }
      );
    }
  }

  validar() {
    return this.house.cost >= 0 && this.house.roommatesLimit >= 1;
  }

  uodateServiceHouse(services: any) {
    this.house.services = services;
  }

  obtenerImage(event) {
    this.image = event.target.files[0];
  }

  async submit(forma: NgForm) {
    if (this.mode === '/house/register') {
      this.houseService.addHouse(this.house);
      if (this.image !== undefined) {
        await this.houseService.addImage(this.image);
      }
      this.router.navigate(['/']);
    } else {
      this.houseService.editHouse(this.house);
      if (this.image !== undefined) {
        await this.houseService.addImage(this.image);
      }
      this.houseUserService.updateUserHouse(this.house.hid);
      this.router.navigate(['/']);
    }

  }


}
