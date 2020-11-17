import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'bkg-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  gotoCadastroClientes() {
    this.router.navigate(['addclient']);
  }
}
