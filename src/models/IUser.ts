export interface IUser {
  username: string;
  profilePicture: string;
  password: string;
  activationLink: string;
  email: string;
  id: string;
  isActivated: boolean;
  roles: string[];
}
