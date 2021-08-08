import { Component } from '@angular/core';
import { RestService } from 'src/app/rest.service';
import {Router} from "@angular/router"
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent {
  email!: string;
  password!: string;

  constructor(private restService: RestService, private router: Router) {}

  OnInputEmail(event: any) {
    this.email = event.target.value;
  }

  OnInputPassword(event: any) {
    this.password = event.target.value;
  }

  loginWithData(e: any) {
    e.preventDefault();
    const payload = {
      email: this.email,
      password: this.password,
    };
    this.restService.login(payload).subscribe(
      // to do: save token and user id
      (data) => this.router.navigate(['/tasks']),
      (error) => {
        Swal.fire('Error', error, 'error');
      }
    );
  }
}
