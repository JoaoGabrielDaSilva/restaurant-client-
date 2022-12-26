import { AuthModel } from "../../models/auth-model";
import { UserModel } from "../../models/user-model";

export interface SignIn {
  execute(params: SignIn.Params): Promise<SignIn.Model>;
}

export namespace SignIn {
  export type Params = {
    email: string;
    password: string;
  };

  export type Model = {
    user: UserModel;
    authorization: AuthModel;
  };
}
