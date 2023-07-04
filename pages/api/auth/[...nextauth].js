import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: "Iv1.0ddbe26eaabcf2fa",
      clientSecret: "e12b9691d18f416aeec1f12da9023b79d7bbbc84",
    }),
  ],
  secret: "dejay",
};
export default NextAuth(authOptions);
