import { Component, OnInit } from '@angular/core';
import { Modality } from 'src/app/modality.service';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'bkg-investment',
  templateUrl: './investment.component.html',
  styleUrls: ['./investment.component.css'],
})
export class InvestmentComponent implements OnInit {
  investment;

  constructor(
    private userService: UserService,
    private modalityService: Modality
  ) {}

  ngOnInit(): void {
    this.getInvestment();
  }

  getInvestment() {
    const id = this.userService.getInvestment();
    const result = this.modalityService.getById(id);
    this.investment = result;
    console.log(this.investment);
  }
}
