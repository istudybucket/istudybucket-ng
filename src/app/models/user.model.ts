export class User {
  username: string;
  email: string;
  phoneNumber: string;
  firstName: string;
  lastName: string;
  dob: string;
  gender: string;
  userId: number;


  constructor(username: string, email: string, phoneNumber: string, firstName: string, lastName: string, dob: string, gender: string, userId: number) {
    this.username = username;
    this.email = email;
    this.phoneNumber = phoneNumber;
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = dob;
    this.gender = gender;
    this.userId = userId;
  }
}
