import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardService } from '../../services/dashboard.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  users: any[] = [];

  constructor(private dashboardService: DashboardService) {}

  ngOnInit(): void {

    this.dashboardService.getDashboardData()
      .subscribe({
        next: (res: any) => {
          console.log(res);

          // backend response handling
          this.users = res.users || [];
        },
        error: (err) => {
          console.log(err);
        }
      });
  }
}
