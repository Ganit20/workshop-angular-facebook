export interface User {
    id:        string;
    name:      string;
    avatarUrl: string;
}
export interface Credentials {
    email:        string;
    password:      string;
}
export interface UserData {
    email:        string;
    password:      string;
    passwordConfirmation: string,
    person: {
      name:string,
      surname:string
    }
}