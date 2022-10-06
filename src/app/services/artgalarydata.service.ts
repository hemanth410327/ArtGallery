import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { IArtGalary, IPath } from 'src/app/interfaces/artgalary';

@Injectable({
  providedIn: 'root'
})
export class ArtgalarydataService {

  constructor(private http:HttpClient) { }

  //check whether user logged in or not
  authenticate(){
    return !(sessionStorage.getItem('id')===null)
  }

  //get data from artgallery
  getEvents():Observable<IArtGalary[]> {
    return this.http.request<IArtGalary[]>('GET', `${environment.serverUrl}/event`);
  }

  //get user uploads
  getmydata(event:any) {
    return this.http.get(`${environment.serverUrl}/Mydata/${event}`);
  }

  //get userdata based on id
  getuserdata(event:any) {
    return this.http.get(`${environment.serverUrl}/User/${event}`);
  }

  //gets password for specific email
  getlogin(event:any) {
    return this.http.get(`${environment.serverUrl}/login/${event}`);
  }

  //get artdata with user data
  getartdata(event:any):Observable<IArtGalary[]>{
    return this.http.request<IArtGalary[]>('GET', `${environment.serverUrl}/Artdata/${event}`);
  }

  getEventsById(event:any):Observable<IArtGalary[]> {
    return this.http.request<IArtGalary[]>('GET', `${environment.serverUrl}/event/${event}`);
  }

  // create new items
  createEvent(event:any) {
    return this.http.post<any>(`${environment.serverUrl}/addart`,event);
  }

  //user registration
  Register(event:any) {
    return this.http.post<any>(`${environment.serverUrl}/register`,event);
  }

  //update user information
  updateDetails(event:any) {
    return this.http.post<any>( `${environment.serverUrl}/Update`, event);
  }

  //delete art data
  deletedata(event:any) {
    return this.http.request('DELETE', `${environment.serverUrl}/delete/${event}`);
  }

  //upload image
  uploadimg(event:any):Observable<IPath>{
    return this.http.post<IPath>(`${environment.serverUrl}/file`,event);
  }
}
