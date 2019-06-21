export class User{
    id: number;
    username: string;
    password: string;
    firstName: string;
    lastName: string;
    email: string;
    heart: string;
    role: number;


  constructor(id: number, username: string, password: string, firstName: string, lastName: string, email: string, heart: string, role: number) {
    this.id = id;
    this.username = username;
    this.password = password;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.heart = heart;
    this.role = role;
  }
}
