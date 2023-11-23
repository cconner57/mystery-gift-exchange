import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Party } from '../../../models/users';

@Component({
  standalone: true,
  selector: 'app-sub-header-item',
  templateUrl: './sub-header-item.component.html',
  styleUrls: ['./sub-header-item.component.css'],
  imports: [ReactiveFormsModule],
})
export class SubHeaderItemComponent {
  @Input() text1 = '';
  @Input() partyDetails!: Party;

  @Output() addBudget: EventEmitter<number> = new EventEmitter();
  @Output() addDate: EventEmitter<string> = new EventEmitter();

  date = new FormControl('');

  changeDate = () => {
    this.addDate.emit(this.date.value ?? '');
  };

  incrementBudget = (amount: number) => {
    this.addBudget.emit(this.partyDetails.budget + amount);
  };

  decrementBudget = (amount: number) => {
    if (this.partyDetails.budget > 0) {
      this.addBudget.emit(this.partyDetails.budget - amount);
    }
  };
}
