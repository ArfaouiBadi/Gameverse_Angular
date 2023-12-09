import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
  isConnected: boolean = false;
  constructor() { }
  ngOnInit(): void {
    this.isConnected = localStorage.getItem("isConnected") == "true" ? true : false;
  }
  
  logout(): void {
    localStorage.setItem("isConnected", "false");
    this.isConnected = false;
  }

}
