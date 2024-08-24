import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Input() transparentNavbar : boolean;
  theme : string;

  constructor(private router: Router){
    this.transparentNavbar = true;
    this.theme = 'transparent';
  }

  goToHome(){
    this.router.navigate(['/'])
  }

  ngOnInit(): void {
    this.theme = this.transparentNavbar ? 'transparent' : 'black';

    const navBar = document.getElementById('navbar');
    if(navBar)
      navBar.style.backgroundColor = this.theme;
  }
}
