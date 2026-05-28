import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = () => {

  const router = inject(Router);

  const token = localStorage.getItem('token');

  if (!token) {
    router.navigate(['/login']);
    return false;
  }

  try {
    const payload = JSON.parse(atob(token.split('.')[1]));

    const isExpired = payload.exp * 1000 < Date.now();

    if (isExpired) {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      router.navigate(['/login']);
      return false;
    }

  } catch (err) {
    localStorage.removeItem('token');
    router.navigate(['/login']);
    return false;
  }

  return true;
};
