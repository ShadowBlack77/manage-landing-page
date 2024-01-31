import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { register } from 'swiper/element/bundle';
register();

@Component({
  selector: 'app-custom-swaper',
  standalone: true,
  imports: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './custom-swaper.component.html',
  styleUrl: './custom-swaper.component.css'
})
export class CustomSwaperComponent {

}
