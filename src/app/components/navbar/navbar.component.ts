import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Input() transparentNavbar : boolean;
  theme : string;

  constructor(){
    this.transparentNavbar = true;
    this.theme = 'transparent'
  }

  ngOnInit(): void {
    this.theme = this.transparentNavbar ? 'transparent' : 'black';

    const navBar = document.getElementById('navbar');
    if(navBar)
      navBar.style.backgroundColor = this.theme;
  }
}
