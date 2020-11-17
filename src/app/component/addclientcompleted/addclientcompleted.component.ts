import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'bkg-addclientcompleted',
  templateUrl: './addclientcompleted.component.html',
  styleUrls: ['./addclientcompleted.component.css'],
})
export class AddclientcompletedComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.navigateToLogin();
  }
  navigateToLogin() {
    setTimeout(() => {
      this.router.navigate(['/login']);
    }, 3000);
  }
}
