import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { User } from 'src/app/models/users';

@Component({
  standalone: true,
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.css'],
  imports: [ReactiveFormsModule],
})
export class TextInputComponent {
  @Output() addUser: EventEmitter<User> = new EventEmitter();

  name = new FormControl('');

  addNewUser = () => {
    if (this.name.value !== '') {
      let newUser: User = {
        id: crypto.randomUUID(),
        name: this.name.value ?? '',
        giftParticipant: '',
      };
      this.addUser.emit(newUser);
      this.name.reset();
    }
  };
}
