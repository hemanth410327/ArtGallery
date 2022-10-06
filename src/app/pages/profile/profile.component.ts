import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArtgalarydataService } from 'src/app/services/artgalarydata.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  userdata:any;

  constructor(private _server:ArtgalarydataService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    if(!this._server.authenticate()){
      alert("You are not logged in")
      this.router.navigate(['../../login'],{relativeTo:this.route});
    }else{
    this._server.getuserdata(sessionStorage.getItem('id')).subscribe((res:any)=>{this.userdata=res
    console.log(res)})
    }
  }

  edit(){
    this.router.navigate(['../edit'],{relativeTo:this.route});
  }

  logout(){
     sessionStorage.clear();
     alert("Logged out successfully")
     this.router.navigate([''],{relativeTo:this.route});
  }
  }
