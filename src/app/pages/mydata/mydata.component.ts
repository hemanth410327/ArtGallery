import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArtgalarydataService } from 'src/app/services/artgalarydata.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-mydata',
  templateUrl: './mydata.component.html',
  styleUrls: ['./mydata.component.css']
})
export class MydataComponent implements OnInit {

  path=environment.serverUrl;
  foodData:any;

  constructor(private _server : ArtgalarydataService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    if(!this._server.authenticate()){
      alert("You are not logged in")
      this.router.navigate(['../../login'],{relativeTo:this.route});
    }else{
   this._server.getmydata(sessionStorage.getItem('id')).subscribe((res)=> {this.foodData = res
  console.log(res)});
   }
  }

  delete(id:any,imageName:any){
    this._server.deletedata(id).subscribe((res)=>{
      alert("1 item deleted successfully");
      this.router.navigate(['../gallery'],{relativeTo:this.route});
      console.log(res)
    },
    err=>alert("something went wrong"))
  }
}
