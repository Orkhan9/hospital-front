import {Component, ElementRef, OnDestroy, OnInit} from '@angular/core';
import {JwtHelperService} from "@auth0/angular-jwt";
import {AuthService} from "./service/auth.service";
import {BasketService} from './service/basket.service';
import {NavigationStart, Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'practise';
  isStatus = true;
  jwtHelper=new JwtHelperService();
  constructor(private authService:AuthService,private basketService:BasketService, private router: Router, private elRef: ElementRef) {
   // this.router.events.subscribe(x => {
   //   if(x instanceof NavigationStart){
   //     console.log(x);
   //     // if (x.url == '/home'){
   //     //   if (this.isStatus){
   //     //     console.log('salam');
   //     //   }
   //     // }
   //     if(this.elRef.nativeElement.querySelector('.card') != null){
   //       this.elRef.nativeElement.querySelector('.card').style.display='d-none';
   //
   //     }
   //   }
   // })
  }
  ngOnInit() {
    this.getBasket()
}

getBasket(){
  const token=localStorage.getItem("token");
  if (token){
    this.authService.decodedToken=this.jwtHelper.decodeToken(token);
  }
  const basketId=localStorage.getItem(this.jwtHelper.decodeToken(token).unique_name)
  if (basketId){
    this.basketService.getBasket(basketId).subscribe(()=>{
      console.log("basket initialize" + basketId);
    },error => {
      console.log(error);
    })
  }
}
}
