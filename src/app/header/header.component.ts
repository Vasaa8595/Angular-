import { Component, Input,Renderer2 } from '@angular/core';
import { SidenavComponent } from '../sidenav/sidenav.component';



@Component({
  selector: 'app-header',
  standalone: true,
  imports: [SidenavComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @Input({required:true}) userimg: string= '';
 @Input({required:true}) name: string='';
 

 constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
    this.addGlobalClickListener();
  }

  toggleDropdown() {
    const dropdown = document.querySelector('.dropdown');
    if (dropdown) {
      dropdown.classList.toggle('active');
    }
  }

  addGlobalClickListener() {
    this.renderer.listen('window', 'click', (event: Event) => {
      const dropdown = document.querySelector('.dropdown');
      const target = event.target as HTMLElement;
      if (dropdown && !dropdown.contains(target)) {
        dropdown.classList.remove('active');
      }
    });
  }
}
