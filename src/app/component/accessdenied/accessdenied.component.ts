import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'bkg-accessdenied',
  templateUrl: './accessdenied.component.html',
  styleUrls: ['./accessdenied.component.css'],
})
export class AccessdeniedComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  navigateToAddClient() {
    this.router.navigate(['addClient']);
  }
}
