import { Component } from '@angular/core';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent {
  pageMenuVariable:boolean = false;
  menuIconVariable:boolean = false;
  openPageMenu(){
    this.pageMenuVariable =! this.pageMenuVariable;
    this.menuIconVariable =! this.menuIconVariable;
  }
}
