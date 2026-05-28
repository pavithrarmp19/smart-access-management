import { Component} from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']

})
export class LoginComponent {
  userId: string= '';
  password: string= '';
  role: string='General User';
  login(){
    console.log('User ID:', this.userId);
    console.log("Password:", this.password);
    console.log("Role:", this.role);
    alert("Login Button Clicked");


  }
}
