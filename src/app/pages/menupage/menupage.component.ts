import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArtgalarydataService } from 'src/app/services/artgalarydata.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-menupage',
  templateUrl: './menupage.component.html',
  styleUrls: ['./menupage.component.css']
})
export class MenupageComponent implements OnInit {

  path=environment.serverUrl;
  getMenuId:any;
  menuData:any;
  
  constructor(private param:ActivatedRoute,private _server:ArtgalarydataService,
    private router:Router,private route:ActivatedRoute) { }
  

  ngOnInit(): void {
    if(!this._server.authenticate()){
      alert("You are not logged in")
      this.router.navigate(['../../login'],{relativeTo:this.route});
    }else{
    this.getMenuId = this.param.snapshot.paramMap.get('id');
    console.log(this.getMenuId ,'getmenu');
    if(this.getMenuId)
    {
        this._server.getartdata(this.getMenuId).subscribe((res)=>this.menuData=res,res=>alert("something went wrong"));    
      }  
    }
  }

}
