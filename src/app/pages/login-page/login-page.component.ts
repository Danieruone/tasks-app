import { Component } from '@angular/core';
import { RestService } from 'src/app/rest.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent {
  email!: string;
  password!: string;
  isLoading: boolean = false;

  constructor(private restService: RestService, private router: Router) {}

  OnInputEmail(event: any) {
    this.email = event.target.value;
  }

  OnInputPassword(event: any) {
    this.password = event.target.value;
  }

  loginWithData(e: any) {
    e.preventDefault();
    this.isLoading = true;
    const payload = {
      email: this.email,
      password: this.password,
    };
    this.restService.login(payload).subscribe(
      // to do: save token and user id
      (data: any) => {
        this.isLoading = false;
        this.restService.isLogged = true;
        this.restService.userID = data.user._id;
        this.restService.token = data.token;
        this.saveLocalStorage(data);
        this.router.navigate(['/tasks']);
      },
      (error) => {
        this.isLoading = false;
        Swal.fire('Error', error, 'error');
      }
    );
  }

  saveLocalStorage(data: any) {
    const storage = {
      userID: data.user._id,
      token: data.token,
    };
    localStorage.setItem('userData', JSON.stringify(storage));
  }
}
