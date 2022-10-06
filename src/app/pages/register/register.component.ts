import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ArtgalarydataService } from 'src/app/services/artgalarydata.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  RegistrationForm:any;
  currentEvent= { FirstName:'',LastName:'',Email: '',MobNumber:null, Password: ''};
  response:any;

  constructor(private _server:ArtgalarydataService,private fb:FormBuilder,
    private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {

    this.RegistrationForm = this.fb.group({
      FirstName : [this.currentEvent.FirstName, Validators.required],
      LastName : [this.currentEvent.LastName, Validators.required],
      Email : [this.currentEvent.Email, [Validators.required ,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      MobNumber : [this.currentEvent.MobNumber, [Validators.required ,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      Password : [this.currentEvent.Password, [Validators.required,Validators.minLength(6), Validators.maxLength(12)]],
    });

  }
 
  get getters() { 
    return this.RegistrationForm.controls; 
  }

  OnSubmit(RegistrationForm:any){
    console.log(RegistrationForm)
    this._server.getlogin(RegistrationForm.Email).subscribe(res=>{
      this.response=res
      this.validate(RegistrationForm);
      },err=>
      alert("something went wrong")
      )
  }

  validate(form:any){
    if(this.response.length === 0){
      this._server.Register(form).subscribe((res)=>{
        alert("Registured Successfully")
        this.router.navigate(['../login'],{relativeTo:this.route});
      })
    }
    else{
      alert("A User with this email already exists")
    }
  }

}
