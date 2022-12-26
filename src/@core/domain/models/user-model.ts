export enum Role {
  ADMIN,
  USER,
}

export type UserModel = {
  id: string;
  email: string;
  name: string;
  role: Role;
};
