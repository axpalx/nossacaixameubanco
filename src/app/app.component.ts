import { Component } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";

@Component({
  selector: "bkg-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "nossacaixameubanco";

  isShow: boolean;
  data = false;
  constructor(public dialog: MatDialog) {}

  ngOnInit() {}
  openDialog() {
    const dialogRef = this.dialog.open(AppComponent, {
      height: "350px",
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
