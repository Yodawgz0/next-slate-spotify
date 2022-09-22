import NextAuth from "next-auth";
import SpotifyProvider from "next-auth/providers/github";

export const authOptions = {
  providers: [
    SpotifyProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
};
export default NextAuth(authOptions);
