import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Modality } from 'src/app/modality.service';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'bkg-investmentpanel',
  templateUrl: './investmentpanel.component.html',
  styleUrls: ['./investmentpanel.component.css'],
})
export class InvestmentpanelComponent implements OnInit {
  modalitySingle;

  constructor(
    private modalityService: Modality,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.getProductById();
  }

  getProductById() {
    const id = this.userService.getProduct();
    const result = this.modalityService.getById(id);
    this.modalitySingle = result;
  }

  purchase(id) {
    this.userService.setInvestment(id);
  }
}
