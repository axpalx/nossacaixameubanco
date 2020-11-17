import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { debounceTime } from 'rxjs/operators';
import { ErroraddclientComponent } from '../erroraddclient/erroraddclient.component';

@Component({
  selector: 'bkg-addclient',
  templateUrl: './addclient.component.html',
  styleUrls: ['./addclient.component.css'],
})
export class AddclientComponent implements OnInit {
  formAddClient;
  valuesForm: Object;
  changeToString;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.formAddClient = this.fb.group({
      name: [''],
      cpf: [''],
      email: [''],
      phone: [''],
      address: [''],
    });

    this.formAddClient.valueChanges
      .pipe(debounceTime(1000))
      .subscribe((res) => {
        console.log(res);
        this.valuesForm = res;
      });
  }

  addClient() {
    if (!this.valuesForm) {
      this.openDialog();
    } else {
      this.changeToString = JSON.stringify(this.valuesForm);
      localStorage.setItem('addclient', this.changeToString);

      this.verificaCadastro();
    }
  }

  verificaCadastro() {
    setTimeout(() => {
      if (localStorage.getItem('addclient')) {
        this.router.navigate(['addclientcomleted']);
      } else {
        return false;
      }
    }, 1000);
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
