import { Component, Input } from '@angular/core';
import { User } from 'src/app/models/users';

@Component({
  selector: 'app-participants',
  templateUrl: './participants.component.html',
  styleUrls: ['./participants.component.css'],
})
export class ParticipantsComponent {
  @Input() userList?: User[];
}
