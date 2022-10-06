import { Component, OnInit } from '@angular/core';
import { ArtgalarydataService } from 'src/app/services/artgalarydata.service';
import { environment } from 'src/environments/environment';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  path=environment.serverUrl;
  foodData:any;

  constructor(private _server:ArtgalarydataService,private router:Router,private route:ActivatedRoute) { }
  
  ngOnInit(): void {
    this._server.getEvents().subscribe((res)=>this.foodData = res,err=>alert("something went wrong"));
    if(!localStorage.getItem('foo')){
      localStorage.setItem('foo','no reload')
      location.reload()
        }else{
      localStorage.removeItem('foo')
        }    
      }
  OpenGalary(){
    this.router.navigate(['menu/gallery'],{relativeTo:this.route});
   }
}
