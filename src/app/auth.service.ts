declare var google:any;
import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

constructor(){}
router =inject(Router)
signOut(){
  google.accounts.id.disableAutoSelect();
  this.router.navigate(['/'])
}
getFirstLetterOfUsername(email: string): string {
  if (!email) return '';
  const username = email.split('@')[0];
  return username.charAt(0).toUpperCase();
}
}