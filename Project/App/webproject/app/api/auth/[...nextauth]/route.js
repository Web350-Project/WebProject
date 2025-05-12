// app/api/auth/[...nextauth]/route.js
import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

const authOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider.default({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.username || !credentials?.password) {
          console.log("Missing credentials");
          return null;
        }

        console.log(`Login attempt for username: ${credentials.username}`);

        try {
          const user = await prisma.user.findUnique({
            where: { username: credentials.username },
          });

          if (!user) {
            console.log(`User not found: ${credentials.username}`);
            return null;
          }

          if (user.password === "123" && credentials.password === "123") {
            console.log(`Authentication successful (plaintext) for: ${user.username}`);
            return {
              id: user.username,
              username: user.username,
              type: user.type,
            };
          }
          
          try {
            const isValidPassword = await bcrypt.compare(credentials.password, user.password);
            if (isValidPassword) {
              console.log(`Authentication successful (bcrypt) for: ${user.username}`);
              return {
                id: user.username,
                username: user.username,
                type: user.type,
              };
            }
          } catch (bcryptError) {
            console.log("Not a bcrypt hash, continuing with direct comparison");
          }
          
          if (credentials.password === user.password) {
            console.log(`Authentication successful (direct comparison) for: ${user.username}`);
            return {
              id: user.username,
              username: user.username,
              type: user.type,
            };
          }
          
          console.log("Invalid password");
          return null;
          
        } catch (error) {
          console.error("Authentication error:", error);
          return null;
        }
      },
    }),
    GitHubProvider.default({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
      profile(profile) {
        console.log("GitHub profile:", profile);
        return {
          id: profile.login,
          username: profile.login,
          name: profile.name || profile.login,
          email: profile.email,
          type: 'github',
        };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.username = user.username;
        token.type = user.type;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        if (!session.user) {
          session.user = {};
        }
        session.user.username = token.username;
        session.user.type = token.type;
        session.user.name = token.name || token.username; 
      }
      return session;
    },
  },
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/auth/signin",
  },
  secret: process.env.NEXTAUTH_SECRET,
  debug: process.env.NODE_ENV !== 'production',
};

const handler = NextAuth.default(authOptions);

export { handler as GET, handler as POST };