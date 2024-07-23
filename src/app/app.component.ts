import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BodyComponent } from './body/body.component';


interface SideNavToggle{
  screenWidth:number;
  collapsed:boolean;

}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,BodyComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
}) 
export class AppComponent {
  title = 'myapp';
  
  isSideNavCollapsed=false;
  screenWidth = 0;

  onToggleSideNav(data: SideNavToggle): void{
    this.screenWidth=data.screenWidth;
    this.isSideNavCollapsed=data.collapsed;

  }
}
