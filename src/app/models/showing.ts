import { User } from './user';

export class Showing{
  showId: number;
  hostId: User;
  description: string;
  time: string;
  address: string;

  constructor(showId: number, hostId: User, description: string, time: string, address: string) {
    this.showId = showId;
    this.hostId = hostId;
    this.description = description;
    this.time = time;
    this.address = address;
  }

}