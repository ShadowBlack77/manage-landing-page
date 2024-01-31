import { Component } from '@angular/core';
import { CustomSwaperComponent } from '../custom-swaper/custom-swaper.component';

@Component({
  selector: 'app-section-two',
  standalone: true,
  imports: [
    CustomSwaperComponent
  ],
  templateUrl: './section-two.component.html',
})
export class SectionTwoComponent {

}
