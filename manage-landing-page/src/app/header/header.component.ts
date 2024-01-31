import { Component, ElementRef, ViewChild, HostListener} from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterModule
  ],
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  @ViewChild('hamButton') hamButton!: ElementRef;

  hamMenuClick() {
    this.hamButton.nativeElement.classList.toggle('showed-ham-menu');
  }
}
