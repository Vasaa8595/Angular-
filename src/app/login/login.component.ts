
declare var google:any;

import { CommonModule } from '@angular/common';
import { HtmlTagDefinition, Token } from '@angular/compiler';
import { Component, inject, OnInit } from '@angular/core';
import { response} from 'express';
import { callbackify } from 'util';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  private router = inject(Router);

ngOnInit(): void {
  google.accounts.id.initialize({
    client_id:'291548464106-4erdg70ot3fec51qkbh5ogppsofavehv.apps.googleusercontent.com',
    callback: (resp:any)=> this.handleLogin(resp)
  });
  google.accounts.id.renderButton(document.getElementById("google-btn"),{
    theme:'filled_white',
    size:'large',
    shape:'circle',
    width:400,

  })
}

private decodeToken(token: string){
   return JSON.parse(atob(token.split(".")[1]));
}

handleLogin(response:any){
  if(response){
    const payload= this.decodeToken(response.credential);
    sessionStorage.setItem("loggedInUser",JSON.stringify(payload));
    const email = payload.email;
    // Check if email is from @bitsathy.ac.in domain
    if (email.endsWith('@bitsathy.ac.in')) {
      sessionStorage.setItem("loggedInUser", JSON.stringify(payload));
    this.router.navigate(['sidenav'])
  } else {
    alert('Only @bitsathy.ac.in email addresses are allowed.');
  }
}
}
}
