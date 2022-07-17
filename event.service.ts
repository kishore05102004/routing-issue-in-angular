import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor( private http: HttpClient ) { }

  private _purl="http://localhost:4500/api/product1";
  private _p1url="http://localhost:4500/api/product2";

  private _p2url="http://localhost:4500/api/product3";



  product1(){
    return this.http.get<any>(this._purl)
  }

  product2(){
    return this.http.get<any>(this._p1url)
  }

  product3(){
    return this.http.get<any>(this._purl)
  }
}
