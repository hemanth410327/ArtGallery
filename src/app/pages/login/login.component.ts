import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ArtgalarydataService } from 'src/app/services/artgalarydata.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginform:any;
  error!:boolean;
  response:any;

  currentEvent= { Email: '', Password: ''};

  constructor(private _server:ArtgalarydataService,private fb:FormBuilder,
    private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.loginform = this.fb.group({
      Email: [this.currentEvent.Email, Validators.required],
      Password: [this.currentEvent.Password, Validators.required],
    });
  }

  get Email(){
    return this.loginform.get('Email');
  }

  get Password(){
    return this.loginform.get('Password');
  }

  validate(loginform:any){
    if(this.response.length === 0){
      alert("Email is Not Registured");
    }
    else{
      if(this.response[0].Password === loginform.Password){
        alert("login successful");
        let firstchar:string = this.response[0].FirstName
        let secondchar:string= this.response[0].LastName
        let logo=firstchar.charAt(0)+secondchar.charAt(0)
        sessionStorage.setItem('id',this.response[0].id)
        sessionStorage.setItem('code',logo)

        this.router.navigate(['../menu/gallery'],{relativeTo:this.route});
      }
      else{
        alert("Wrong Password");
      }
    }
  }

  onSubmit(loginform:any){
    this._server.getlogin(loginform.Email).subscribe(res=>{
      this.response=res
      this.validate(loginform);
      },err=>
      alert("something went wrong"))
  }
}
