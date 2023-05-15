import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor() {
    window.addEventListener('scroll', function(){
      var mattoolbar:any = document.querySelector("mat-toolbar");
      mattoolbar.classList.toggle("sticky", window.scrollY > 0);
    }
    )
   }
}
