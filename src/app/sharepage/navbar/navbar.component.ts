import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  identifier:any;
  
  constructor( private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    if(sessionStorage.getItem('code')===null){
      this.identifier='!'
    }
    else{
      this.identifier=sessionStorage.getItem('code');
    }
  }
}
