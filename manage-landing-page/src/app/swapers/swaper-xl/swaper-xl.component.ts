import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { register } from 'swiper/element/bundle';
register();

@Component({
  selector: 'app-swaper-xl',
  standalone: true,
  imports: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './swaper-xl.component.html',
})
export class SwaperXlComponent {

}
