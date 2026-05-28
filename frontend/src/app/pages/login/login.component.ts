import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  userId: string = '';
  password: string = '';
  role: string = '';



  constructor(
    private http: HttpClient,
    private router: Router
  ) {}

  login() {

    console.log("BUTTON CLICKED");

    const loginData = {
      userId: this.userId,
      password: this.password,
      role: this.role
    };

    console.log("SENDING:", loginData);

  this.http.post<any>(
  'http://localhost:5000/api/auth/login',
  loginData
)

    .subscribe({

      next: (res) => {

        console.log("RESPONSE:", res);

        if (res.success) {

          alert("Login Successful");

          localStorage.setItem(
            'token',
            res.token
          );

          localStorage.setItem(
            'user',
            JSON.stringify(res.user)
          );

          this.router.navigate(['/dashboard']);

        } else {

          alert(res.message);
        }
      },
      error: (err) => {

        console.log("FULL ERROR:", err);

        alert("Server Error");
      }
    });
  }

  forgotPassword() {

    alert("Password reset feature coming soon");
  }
}
