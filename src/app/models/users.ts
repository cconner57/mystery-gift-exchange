export interface User {
  id: string;
  name: string;
  giftParticipant: string;
  link?: string;
}

export interface Party {
  budget: number;
  date: string;
  participants: User[];
}

export interface PartyDetails {
  budget: number;
  date: string;
  name: string;
  giftTo: string;
}
