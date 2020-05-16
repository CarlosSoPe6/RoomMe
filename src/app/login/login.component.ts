import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private route: ActivatedRoute, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      if(params.code) {
        this.authService.googleLogin(params).subscribe((data) => {
          if(this.authService.isLoggedIn()) {
            this.router.navigateByUrl('/home');
          }
        });
      }
    });
  }

  submit(form: NgForm) {
    console.log(form.value.email, form.value.password);
    this.authService.login(form.value.email, form.value.password)
        .subscribe((data) => {
          console.log(data);
          this.router.navigateByUrl('/home');
        }, (err) => console.log(err));
  }

}
