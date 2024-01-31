import { Component } from '@angular/core';

import { SwaperXlComponent } from '../swapers/swaper-xl/swaper-xl.component';
import { SwaperMediumComponent } from '../swapers/swaper-medium/swaper-medium.component';
import { SwaperMiniComponent } from '../swapers/swaper-mini/swaper-mini.component';

@Component({
  selector: 'app-section-two',
  standalone: true,
  imports: [
    SwaperXlComponent,
    SwaperMediumComponent,
    SwaperMiniComponent
  ],
  templateUrl: './section-two.component.html',
})
export class SectionTwoComponent {

}
