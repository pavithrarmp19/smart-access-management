import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {

  loading: boolean = true;

  user: any;

  role: string = '';

  records = [

    {
      userId: 'user1',
      role: 'General User',
      access: 'Limited'
    },

    {
      userId: 'admin1',
      role: 'Admin',
      access: 'Full'
    }

  ];

  constructor(private router: Router) {}

  ngOnInit(): void {

    const storedUser = localStorage.getItem('user');

    if (storedUser) {

      this.user = JSON.parse(storedUser);

      this.role = this.user.role;

      // LOADING DELAY
      setTimeout(() => {

        this.loading = false;

      }, 2000);

      // ADMIN → SEE ALL RECORDS
      if (this.role === 'Admin') {

        this.records = [

          {
            userId: 'user1',
            role: 'General User',
            access: 'Limited'
          },

          {
            userId: 'admin1',
            role: 'Admin',
            access: 'Full'
          }

        ];

      }

      // GENERAL USER → SEE OWN RECORD
      else {

        this.records = [

          {
            userId: this.user.userId,
            role: this.user.role,
            access: 'Limited'
          }

        ];

      }

    }

  }

  // LOGOUT
  logout() {

    localStorage.clear();

    this.router.navigate(['/']);

  }

  // ADD USER
  addUser() {

    this.records.push({

      userId: 'newUser',

      role: 'General User',

      access: 'Limited'

    });

  }

  // DELETE USER
  deleteUser() {

    if (this.records.length > 0) {

      this.records.pop();

    }

  }

}
