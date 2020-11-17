import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { SingletonRouterService } from '../app/services/singletonRouter.service';

@Component({
  selector: 'bkg-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'nossacaixameubanco';

  isShow: boolean;
  data = false;
  constructor(
    public dialog: MatDialog,
    private singletonService: SingletonRouterService
  ) {}

  ngOnInit() {
    this.isShow = this.singletonService.getCredentials();
  }
  openDialog() {
    const dialogRef = this.dialog.open(AppComponent, {
      height: '350px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
