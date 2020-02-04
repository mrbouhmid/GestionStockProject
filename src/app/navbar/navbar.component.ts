import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  //@Input('showSideBar') //passer attribut composant parent au composant fils
  showSideBar : boolean = false ;

  @Output() //rafraichir la valeur de l'input!
   showSideBarChange : EventEmitter<boolean> = new EventEmitter<boolean>(); 


  constructor() { }

  ngOnInit() {
  }

  afficherSideBar(){
//    this.showSideBar = ! this.showSideBar;
    this.showSideBarChange.emit(this.showSideBar);
  }

}
