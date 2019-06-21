export class User{
    username: string;
    password: string;
    firstName: string;
    lastName: string;
    email: string;
  heARTIndex: string;
  id: number;
  f;
  role: number;


  constructor(username: string, password: string, firstName: string, lastName: string, email: string, heARTIndex: string, id: number, role: number) {
    this.username = username;
    this.password = password;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.heARTIndex = heARTIndex;
    this.id = id;
    this.role = role;
  }
}
