import { Injectable } from '@angular/core';
@Injectable()
export class AuthService {
  isAuthenticated() {
    const token = localStorage.getItem('addclient');
    if (token) {
      return true;
    }
    return false;
  }
}
