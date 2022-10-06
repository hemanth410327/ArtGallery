import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { ArtgalarydataService } from 'src/app/services/artgalarydata.service';

@Component({
  selector: 'app-menusharedpage',
  templateUrl: './menusharedpage.component.html',
  styleUrls: ['./menusharedpage.component.css']
})
export class MenusharedpageComponent implements OnInit {

  constructor(private route:ActivatedRoute,private router:Router,private _server:ArtgalarydataService) { }

  ngOnInit(): void {
    if(!this._server.authenticate()){
      alert("You are not logged in")
      this.router.navigate(['../login'],{relativeTo:this.route});
    }
  }

 OpenGalary(){
  this.router.navigate(['gallery'],{relativeTo:this.route});
 }

 addimage(){
  this.router.navigate(['addArt'],{relativeTo:this.route});
 }
 Mydata(){
  this.router.navigate(['Mydata'],{relativeTo:this.route});
}
myprofile(){
  this.router.navigate(['profile'],{relativeTo:this.route});
}

}
