import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-recieved',
  templateUrl: './recieved.component.html',
  styleUrls: ['./recieved.component.scss']
})
export class RecievedComponent implements OnInit {

  @Input() msg;
  time;

  constructor() { }

  ngOnInit(): void {
    const date = new Date(this.msg.time);
    let month;
    switch (date.getMonth()) {
      case 0: month = 'Jan'; break;
      case 1: month = 'Feb'; break;
      case 2: month = 'Mar'; break;
      case 3: month = 'Apr'; break;
      case 4: month = 'May'; break;
      case 5: month = 'Jun'; break;
      case 6: month = 'Jul'; break;
      case 7: month = 'Aug'; break;
      case 8: month = 'Sep'; break;
      case 9: month = 'Oct'; break;
      case 10: month = 'Nov'; break;
      case 11: month = 'Dec'; break;

    }
    this.time = `${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')} | ${month} ${date.getDate()} ${date.getFullYear()}`;
  }

}
