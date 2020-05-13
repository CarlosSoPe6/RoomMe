import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient, 
    private router: Router,
    private authService: AuthService) { }

  public registerUser(newUser) {
    this.http.post(environment.url + '/api/register', newUser).subscribe(
      (data) => {
        console.log(data);
        console.log("Estoy en el servicio de registro");
        this.authService.login(newUser.email, newUser.password)
          .subscribe((data) => {
            if(this.authService.isLoggedIn()) {
              this.router.navigateByUrl('/');
            }
          });
      }, (err) => console.log(err)
    );
  }
}
