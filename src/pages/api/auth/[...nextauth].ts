import NextAuth, { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { RemoteSignIn } from "../../../@core/data/use-cases/auth/remote-sign-in";

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      type: "credentials",
      id: "credentials",
      name: "credentials",
      credentials: {},

      async authorize(_, req) {
        const params = req.query;

        const signIn = new RemoteSignIn();

        if (!params) return null;

        const authData = await signIn.execute({
          email: params.email,
          password: params.password,
        });

        const user = authData.user;

        if (authData) {
          return {
            id: user.id,
            email: user.email,
            name: user.name,
          };
        } else {
          return null;
        }
      },
    }),
  ],
  logger: { debug: (code, meta) => console.log(code, meta) },
  pages: {
    signIn: "/auth/sign-in",
  },
};
export default NextAuth(authOptions);
