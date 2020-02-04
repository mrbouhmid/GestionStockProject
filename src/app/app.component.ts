import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'GestionStockProject';
  showHideSideBar : boolean = false;

  onShowSideBarChange(){
    this.showHideSideBar =! this.showHideSideBar;
  }
}
