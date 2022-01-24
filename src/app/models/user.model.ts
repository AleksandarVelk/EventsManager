export class User {
  username: string = '';
  firstName: string = '';
  lastName: string = '';
  email: string = '';
  phone: string = '';
  password: string = '';

  constructor(json?: any) {
    if (json != null) {
      this.username = json.username;
      this.firstName = json.firstName;
      this.lastName = json.lastName;
      this.email = json.email;
      this.phone = json.phone;
      this.password = json.password;
    }
  }
}
