import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  userId = '';
  password = '';
  role = '';

  constructor(
    private http: HttpClient,
    private router: Router
  ) {}

  register() {

    const userData = {
      userId: this.userId,
      password: this.password,
      role: this.role
    };

    this.http.post<any>(
      'http://localhost:5000/api/auth/register',
      userData
    )
    .subscribe({

      next: (res) => {

        if (res.success) {

          alert("Registration Successful");

          this.router.navigate(['/login']);

        } else {

          alert(res.message);
        }
      },

      error: () => {

        alert("Server Error");
      }
    });
  }
}
