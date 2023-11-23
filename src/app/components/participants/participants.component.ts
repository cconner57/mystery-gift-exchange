import { NgStyle } from '@angular/common';
import { Component, Input } from '@angular/core';
import { User } from 'src/app/models/users';

@Component({
  selector: 'app-participants',
  standalone: true,
  templateUrl: './participants.component.html',
  styleUrls: ['./participants.component.css'],
  imports: [NgStyle],
})
export class ParticipantsComponent {
  @Input() userList?: User[];
  @Input() linksCreated?: boolean;

  copied = { clicked: false, userId: '' };

  copyLink = async (link: string, linkId: string) => {
    try {
      console.log('url', location);
      await navigator.clipboard.writeText(
        `${location.origin}/links?details=${link}`
      );
      this.copied.clicked = true;
      this.copied.userId = linkId;
      setTimeout(() => {
        this.copied.clicked = false;
        this.copied.userId = '';
      }, 4000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };
}
