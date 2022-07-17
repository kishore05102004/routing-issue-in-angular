import { Injectable } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {



  constructor(  private auth : AuthService) { 
    
  }

  // intercept(req: { clone: (arg0: { setHeaders: { Authorization: string; }; }) => any; }, next: { handle: (arg0: any) => any; }) {
  //   let tokenizedreq = req.clone({
  //     setHeaders:{
  //       Authorization : 'bearer' + (this.auth.getToken())
  //           }
  //   })
  //   return next.handle(tokenizedreq)
      
  // }

  
  

  // intercept(req :any, next : any){
  //   let tokenised = req.clone({
  //     setHeaders:{
         
  //       Authorization: 'Bearer' + this.auth.getToken()
  //     }
  //   })

  //   return next.handle(tokenised)
  // }

  intercept(req:any, next :any) {

    let tokenizedReq = req.clone(
      {
        headers: req.headers.set('Authorization', 'bearer ' + this.auth.getToken())
      }
    )
    return next.handle(tokenizedReq)
  }
}
