import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ErroraddclientComponent } from '../erroraddclient/erroraddclient.component';

@Component({
  selector: 'bkg-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  formLogin;
  theEvent;
  key;
  regex;
  keys;
  getAddClient;
  message;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    this.formLogin = this.fb.group({
      cpf: [''],
    });
  }

  login() {
    this.getAddClient = JSON.parse(localStorage.getItem('addclient'));
    const cpfPersisted = this.getAddClient['cpf'];
    const cpfTyped = this.formLogin.get('cpf').value;
    if (cpfPersisted == cpfTyped) {
      this.ngOnInit();
      this.router.navigate(['homelogin']);
    } else {
      this.openDialog();
    }
  }

  openDialog() {
    const dialogRef = this.dialog.open(ErroraddclientComponent, {
      height: '350px',
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
