import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArtgalarydataService } from 'src/app/services/artgalarydata.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  path=environment.serverUrl;
  foodData:any;
  constructor(private _server : ArtgalarydataService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    if(!this._server.authenticate()){
      alert("You are not logged in")
      this.router.navigate(['../../login'],{relativeTo:this.route});
    }else{
      this._server.getEvents().subscribe((res)=> this.foodData = res);
      if(!localStorage.getItem('foo')){
      localStorage.setItem('foo','no reload')
      location.reload()
        }else{
          localStorage.removeItem('foo')
      }    
   }
  }
  }
