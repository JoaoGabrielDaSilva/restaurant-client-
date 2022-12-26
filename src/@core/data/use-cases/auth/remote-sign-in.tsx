import api from "../../../../services/api";
import { SignIn } from "../../../domain/use-cases/auth/sign-in";

export class RemoteSignIn implements SignIn {
  async execute({ email, password }: SignIn.Params): Promise<SignIn.Model> {
    const response = await api.post("auth/sign-in", {
      email,
      password,
    });

    const data = response.data;

    return {
      user: data.user,
      authorization: data.authorization,
    };
  }
}
