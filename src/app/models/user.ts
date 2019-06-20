export class User{
    username: string;
    password: string;
    firstName: string;
    lastName: string;
    email: string;
    hearts: string;
    role: number;

  constructor(username: string, password: string, firstName: string, lastName: string, email: string, hearts: string, role: number) {
    this.username = username;
    this.password = password;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.hearts = hearts;
    this.role = role;
  }
}
