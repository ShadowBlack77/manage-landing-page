import { Component, ElementRef, ViewChild, HostListener} from '@angular/core';
import { RouterModule } from '@angular/router';

import { HamburgerMenuComponent } from '../hamburger-menu/hamburger-menu.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterModule,
    HamburgerMenuComponent
  ],
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  @ViewChild('hamButton') hamButton!: ElementRef;
  @ViewChild('hamMenu', { read: ElementRef }) hamMenu!: ElementRef;

  hamMenuClick() {
    this.hamButton.nativeElement.classList.toggle('showed-ham-menu');
    this.hamMenu.nativeElement.classList.toggle('ham-menu');
  }
}
