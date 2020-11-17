import { Component, OnInit } from '@angular/core';
import { Modality } from '../../modality.service';
import { Router } from '@angular/router';
import { UserService } from '../../user.service';

@Component({
  selector: 'bkg-homelogin',
  templateUrl: './homelogin.component.html',
  styleUrls: ['./homelogin.component.css'],
})
export class HomeloginComponent implements OnInit {
  getClientData;
  nameClient;
  modality;
  constructor(
    private modalityService: Modality,
    private router: Router,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.getClientData = JSON.parse(localStorage.getItem('addclient'));
    this.nameClient = this.getClientData['name'];
    console.log(this.nameClient);

    this.modality = this.modalityService.getModality();

    console.log(this.modality);
  }

  investment(id) {
    this.userService.setProduct(id);
    this.router.navigate(['ivestmentpanel']);
  }
}
