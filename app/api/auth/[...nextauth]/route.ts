import NextAuth, { NextAuthOptions } from "next-auth";
import Google from "next-auth/providers/google";
import { connectToMongoDB } from "@/lib/mongodb";
import User from "@/models/user";

// console.log({
//   clientId: process.env.GOOGLE_ID ?? "",
//   clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
// });

const authOptions: NextAuthOptions = NextAuth({
  providers: [
    Google({
      clientId: process.env.GOOGLE_ID ?? "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
    }),
  ],
  callbacks: {
    async session({ session }) {
      //store the user id form MongoDB to session
      const sessionUser = await User.findOne({ email: session.user.email });
      session.user.id = sessionUser._id.toString();

      return session;
    },
    async signIn({ profile }) {
      try {
        await connectToMongoDB();
        // check if a user already exist
        const userExists = await User.findOne({ email: profile.email });
        // if not, create a new user
        if (!userExists) {
          await User.create({
            email: profile.email,
            username: profile.name.replace(" ", "").toLowerCase(),
            image: profile.picture,
          });
        }

        return true;
      } catch (error) {
        console.log("Error to sign in:", error);
        return false;
      }
    },
  },
});

export { authOptions as GET, authOptions as POST };
