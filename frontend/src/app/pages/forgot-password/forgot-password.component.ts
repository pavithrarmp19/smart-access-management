import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [FormsModule, RouterModule],
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})

export class ForgotPasswordComponent {

  userId = '';

  newPassword = '';

  constructor(private http: HttpClient) {}

  resetPassword() {

    this.http.post(

      'http://localhost:5000/api/auth/reset-password',

      {
        userId: this.userId,
        newPassword: this.newPassword
      }

    ).subscribe((res: any) => {

      alert(res.message);

    });

  }

}
