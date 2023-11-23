import { Component } from '@angular/core';
import { User, Party } from 'src/app/models/users';
import { ParticipantsComponent } from 'src/app/components/participants/participants.component';
import { SubHeaderItemComponent } from 'src/app/components/common/sub-header-item/sub-header-item.component';
import { TextInputComponent } from 'src/app/components/common/text-input/text-input.component';
import { HeaderComponent } from 'src/app/components/common/header/header.component';

@Component({
  standalone: true,
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [
    ParticipantsComponent,
    SubHeaderItemComponent,
    TextInputComponent,
    HeaderComponent,
  ],
})
export class HomeComponent {
  loading = false;
  linksCreated = false;
  partyDetails: Party = {
    budget: 0,
    date: '',
    participants: [],
  };

  updateBuget = (newBudget: number) => {
    this.partyDetails.budget = newBudget;
  };

  updateDate = (date: string) => {
    this.partyDetails.date = date;
  };

  addNewUser = (newUser: User) => {
    this.partyDetails.participants.push(newUser);
  };

  encodeData = async (data: Party) => {
    const encoder = new TextEncoder();
    const encodedData = encoder.encode(JSON.stringify(data));
    const hash = await crypto.subtle.digest('SHA-256', encodedData);

    return hash;
  };

  generateLinks = () => {
    this.loading = true;
    let tempUsers = [...this.partyDetails.participants];

    this.partyDetails.participants.forEach((user) => {
      if (user.giftParticipant === '') {
        let availableUsers = tempUsers.filter((u) => u.id !== user.id);

        if (availableUsers.length > 0) {
          let randomIndex = Math.floor(Math.random() * availableUsers.length);
          let giftUser = availableUsers[randomIndex];

          user.giftParticipant = giftUser.name;

          let encodedString = window.btoa(
            JSON.stringify({
              budget: this.partyDetails.budget,
              date: this.partyDetails.date,
              name: user.name,
              giftTo: giftUser.name,
            })
          );
          console.log('encodedString', encodedString);
          user.link = encodedString;
          tempUsers = tempUsers.filter((u) => u.id !== giftUser.id);
        }
      }
    });

    setTimeout(() => {
      this.loading = false;
      this.linksCreated = true;
    }, 1500);
  };
}
