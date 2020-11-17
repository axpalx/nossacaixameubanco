import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  searchProduct = new BehaviorSubject(null);
  investments = new BehaviorSubject(null);

  constructor() {}

  setInvestment(invest) {
    this.investments.next(invest);
  }

  setProduct(product) {
    this.searchProduct.next(product);
  }

  getProduct() {
    return this.searchProduct.getValue();
  }
  getInvestment() {
    return this.investments.getValue();
  }
}
