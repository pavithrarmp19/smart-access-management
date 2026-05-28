import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http: HttpClient) {}

  getDashboardData() {

    const token = localStorage.getItem('token');

    return this.http.get('http://localhost:5000/api/dashboard', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

  }
}
