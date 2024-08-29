import prisma from "@utils/prisma";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";
import z from "zod";

const hashPasswordFunction = async (password: string): Promise<string> => {
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  return hashedPassword;
};

const UserSchema = z.object({
  email: z.string().email("Email is required"),
  name: z.string().min(3),
  password: z.string().min(8),
  image: z.string(),
});

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const myUser = UserSchema.safeParse(data);
    if (!myUser.success) {
      console.log("Validation failed : ", myUser.error);
      return;
    }

    const { email, password, name, image } = myUser.data;

    const isUserAvailable = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });

    if (!isUserAvailable) {
      return NextResponse.json(
        { message: "User is already registered" },
        { status: 500 }
      );
    }

    const hashPassword = await hashPasswordFunction(password);
    const newUser = await prisma.user.create({
      data: {
        email,
        password: hashPassword,
        name,
        image,
      },
    });

    return NextResponse.json({
      message: "User successfully registered",
      user: newUser,
    });
  } catch (error: any) {
    console.log("Error in signup : ", error.message);
    return NextResponse.json(
      {
        error: error.message,
      },
      { status: 500 }
    );
  }
}
