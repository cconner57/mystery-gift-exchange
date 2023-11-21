import { Component } from '@angular/core';
import { User } from 'src/app/models/users';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  users: User[] = [
    { id: 1, name: 'Chris', giftParticipant: '' },
    { id: 2, name: 'Allison', giftParticipant: '' },
    { id: 3, name: 'Lili', giftParticipant: '' },
    { id: 4, name: 'Sam', giftParticipant: '' },
    { id: 5, name: 'Alejandra', giftParticipant: '' },
  ];
}
