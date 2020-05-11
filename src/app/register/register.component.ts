import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RegisterService } from './register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private registerService: RegisterService) { }

  ngOnInit(): void {
  }

  public submit(form: NgForm): void {
    this.registerService.registerUser({
      name : form.value.name,
      lastName : form.value.lastName,
      email : form.value.email,
      photo : " ",
      password : form.value.pass,
      phone : form.value.tel
    });
  }

}
