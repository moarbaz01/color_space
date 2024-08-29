import prisma from "@utils/prisma";
import NextAuth, { Account, Profile, RequestInternal, User } from "next-auth";
import { AdapterUser } from "next-auth/adapters";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import bcrypt from "bcrypt";
import InstagramProvider from "next-auth/providers/instagram";

const comparePassword = async (
  password: string,
  hashPassword: string
): Promise<boolean> => {
  const compare = await bcrypt.compare(password, hashPassword);
  if (!compare) {
    return false;
  }
  return true;
};

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
    }),
    InstagramProvider({
      clientId: process.env.INSTAGRAM_CLIENT_ID,
      clientSecret: process.env.INSTAGRAM_CLIENT_SECRET,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {},
      async authorize(
        credentials: Record<string, string> | undefined,
        req: Pick<RequestInternal, "body" | "query" | "headers" | "method">
      ): Promise<User | null> {
        const { email, password } = credentials || {};
        if (!email || !password) {
          return Promise.reject(new Error("All fields are mandentory"));
        }
        const user = await prisma.user.findUnique({
          where: { email: email },
        });

        if (!user) {
          return Promise.reject(
            new Error("No user found with the provided email")
          );
        }

        if (!user.password) {
          return Promise.reject(new Error("Update your password"));
        }

        const isMatched = await comparePassword(
          password,
          user.password as string
        );

        if (!isMatched) {
          return Promise.reject(new Error("Password is incorrect"));
        }

        return user;
      },
    }),
  ],
  callbacks: {
    signIn: async ({
      user,
      account,
      profile,
    }: {
      user: User | AdapterUser;
      account: Account | null;
      profile?: Profile | undefined;
    }): Promise<string | boolean> => {
      try {
        const isUser = await prisma.user.findUnique({
          where: { email: user.email ?? "" },
        });

        if (isUser) {
          return true;
        } else {
          await prisma.user.create({
            data: {
              name: user.name ?? "Unknown",
              email: user.email ?? "Unknown",
              image: user.image ?? "",
            },
          });
          return true;
        }
      } catch (error) {
        console.error("Error in signIn callback:", error);
        return false;
      }
    },

    redirect: async ({ url, baseUrl }: { url: string; baseUrl: string }) => {
      return baseUrl;
    },
  },
  pages: {
    signIn: "/login",
  },

  secret: process.env.NEXTAUTH_SECRET ?? "",
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
