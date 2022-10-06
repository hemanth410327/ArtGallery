import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ArtgalarydataService } from 'src/app/services/artgalarydata.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  updateForm:any;
  response:any;
  email!:string;

  constructor(private _server:ArtgalarydataService,private fb:FormBuilder,
    private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    if(!this._server.authenticate()){
      alert("You are not logged in")
      this.router.navigate(['../../login'],{relativeTo:this.route});
    }else{
    this._server.getuserdata(sessionStorage.getItem('id')).subscribe((res:any)=>{
      console.log(res)
      this.email=res[0].Email;
      this.updateForm = this.fb.group({
        id:sessionStorage.getItem('id'),
        FirstName : [res[0].FirstName, Validators.required],
        LastName : [res[0].LastName, Validators.required],
        Email : [res[0].Email, [Validators.required ,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
        MobNumber : [res[0].MobNumber, [Validators.required ,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]]
      });
    });
  }
  }

  get getters() { 
    return this.updateForm.controls; 
  }

  OnSubmit(updateForm:any){
    //console.log(updateForm)
    this._server.getlogin(updateForm.Email).subscribe(res=>{
      this.response=res
      this.validate(updateForm);
      },err=>
      alert("something went wrong")
      )
  }

  //checks if newly entered email already exists 
  validate(form:any){
    if(this.response[0].Email === this.email || this.response.length === 0){
      this._server.updateDetails(form).subscribe((res)=>{
        alert("Details Updated Successfully")
        this.router.navigate(['../profile'],{relativeTo:this.route});
      })
    }
    else{
      alert("A User with this email already exists")
    }
  }

}
