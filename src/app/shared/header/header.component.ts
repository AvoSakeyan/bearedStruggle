import { AfterContentChecked, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, AfterContentChecked {
  isLogged: boolean;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.isLogged = !!localStorage.getItem('login');
  }

  logOut() {
    localStorage.clear();
    this.router.navigate(['login']);
  }

  ngAfterContentChecked(): void {
    this.isLogged = !!localStorage.getItem('login');
  }
}
