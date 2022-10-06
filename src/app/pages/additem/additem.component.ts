import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ArtgalarydataService } from 'src/app/services/artgalarydata.service';

@Component({
  selector: 'app-additem',
  templateUrl: './additem.component.html',
  styleUrls: ['./additem.component.css']
})
export class AdditemComponent implements OnInit {

  form: any;
  currentEvent= { ArtName: '', Description: '',Prize:null,image:'',UserId:null};
  images: any;
  str!:any;

  constructor(private fb: FormBuilder,private _server: ArtgalarydataService,
    private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    if(!this._server.authenticate()){
      alert("You are not logged in")
      this.router.navigate(['../../login'],{relativeTo:this.route});
    }else{
    this.form = this.fb.group({
      ArtName: [this.currentEvent.ArtName, Validators.required],
      Description: [this.currentEvent.Description, [Validators.required, Validators.minLength(20)]],
      Prize: [this.currentEvent.Prize, [Validators.required, Validators.min(20)]],
      image:[this.currentEvent.image,Validators.required],
      UserId:sessionStorage.getItem('id'),
      Image:''
    });
  }
  }

  get ArtName(){
    return this.form.get('ArtName');
  }

  get Description(){
    return this.form.get('Description');
  }

  get Price(){
    return this.form.get('Prize');
  }

  get Image(){
    return this.form.get('image');
  }

  //storing image to image property
  selectImage(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.images = file;
    }
  }

  //form data submit
  onSubmit(form : any){
    this.imgSubmit(form);
  }

  //upload image to
  imgSubmit(form:any){
    
      const formdata = new FormData();
      formdata.append('file', this.images);
      this._server.uploadimg(formdata).subscribe((res) => {
      this.str=res;
      this.currentEvent.image=this.str.path;
      this.createdetail(form);
    },err=>
    alert("something went wrong")
    );
  }

  createdetail(form:any){
    this.currentEvent.ArtName=form.ArtName;
    this.currentEvent.Description=form.Description;
    this.currentEvent.Prize=form.Prize;
    this.currentEvent.UserId=form.UserId;
    this._server.createEvent(this.currentEvent).subscribe(res=>{
      alert("Art added successfully!")
      this.router.navigate(['../gallery'],{relativeTo:this.route});
    },
    (err)=> alert("something went wrong"));
  }

}
