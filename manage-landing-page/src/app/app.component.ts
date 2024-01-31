import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { BanerComponent } from './baner/baner.component';
import { SectionOneComponent } from './section-one/section-one.component';
import { SectionTwoComponent } from './section-two/section-two.component';
import { SectionThreeComponent } from './section-three/section-three.component';
import { FooterComponent } from './footer/footer.component';

import { CustomSwaperComponent } from './custom-swaper/custom-swaper.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    RouterOutlet,
    HeaderComponent,
    BanerComponent,
    SectionOneComponent,
    SectionTwoComponent,
    SectionThreeComponent,
    FooterComponent,
    CustomSwaperComponent
  ],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'manage-landing-page';
}
