import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sub-header-item',
  templateUrl: './sub-header-item.component.html',
  styleUrls: ['./sub-header-item.component.css'],
})
export class SubHeaderItemComponent {
  @Input() text1 = '';
  @Input() text2 = '';
  @Input() counter = false;
}
