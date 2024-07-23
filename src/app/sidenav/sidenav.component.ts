
import { Component, EventEmitter, inject, Output } from '@angular/core';
import { AuthService } from '../auth.service';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { navbarData } from './nav-data';
import { RouterModule } from '@angular/router';

interface SideNavToggle{
  screenWidth:number;
  collapsed:boolean;

}

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [CommonModule,HeaderComponent,RouterModule],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.css'
})
export class SidenavComponent  {
  auth = inject(AuthService);
  loggedInUser = JSON.parse(sessionStorage.getItem("loggedInUser")!);
  name: string = this.loggedInUser?.name || '';
  profileimage: string = this.loggedInUser?.picture || '';
  Email: string = this.loggedInUser?.email || '';
  firstLetter: string = this.auth.getFirstLetterOfUsername(this.name);

  signOut() {
    sessionStorage.removeItem("loggedInUser");  
    this.auth.signOut();
  }


@Output() onToggleSideNav:EventEmitter<SideNavToggle>=new EventEmitter();

  collapsed=false;
  screenWidth=0;
  navData=navbarData ;

  toggleCollapse():void{
    this.collapsed=!this.collapsed;
    this.onToggleSideNav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth});
  }


  closeSidenav():void{
  this.collapsed=false;
  this.onToggleSideNav.emit({collapsed:this.collapsed,screenWidth:this.screenWidth});
  }
}

