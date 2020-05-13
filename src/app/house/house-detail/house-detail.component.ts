import { Component, OnInit, Input } from '@angular/core';
import { House } from '../House';

@Component({
  selector: 'app-house-detail',
  templateUrl: './house-detail.component.html',
  styleUrls: ['./house-detail.component.scss']
})
export class HouseDetailComponent implements OnInit {

  @Input() house;
  details: House;
  basePhoto: string;

  constructor() {
   }

  ngOnInit(): void {
    this.details = JSON.parse(JSON.stringify(this.house));
  }

}
