import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http : HttpClient) { }

   private _url ='http://localhost:4500/api/register'

   private _lurl ='http://localhost:4500/api/login'



  register(user:any){
    return this.http.post<any>(this._url,user)
  }

  Login(user:any){
    return this.http.post<any>(this._lurl,user)
  }

  loggedIn()
  {
    return !!localStorage.getItem('token')
  }

  getToken(){
    return localStorage.getItem('token')
  }

  logout()
  {
    localStorage.removeItem('token')
  }



 
}
