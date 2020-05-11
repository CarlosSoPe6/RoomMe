import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { House } from './House';
import { HouseService } from './house.service';

@Component({
  selector: 'app-house',
  templateUrl: './house.component.html',
  styleUrls: ['./house.component.scss']
})
export class HouseComponent implements OnInit {

  mode: string;
  house: House;
  image;

  @ViewChild('f') form: NgForm;

  constructor(private router: Router,
              private houseService: HouseService) {
    this.mode = this.router.url;
  }

  ngOnInit(): void {
    if (this.mode === '/house/register') {
      this.house = new House('', '', '', '', '', '', '', 0, 1, '', '', '', []);
    }
  }

  validar() {
    return this.house.cost >= 0 && this.house.cap >= 1;
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
    }

  }


}
