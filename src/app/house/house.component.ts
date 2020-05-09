import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { House } from './House';

@Component({
  selector: 'app-house',
  templateUrl: './house.component.html',
  styleUrls: ['./house.component.scss']
})
export class HouseComponent implements OnInit {

  mode: string;
  house: House;

  constructor(private router: Router) {
    this.mode = this.router.url;
    console.log(this.mode);
  }

  ngOnInit(): void {
  }

  submit(forma: NgForm) {

  }

}
