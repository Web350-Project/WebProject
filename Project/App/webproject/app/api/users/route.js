// app/api/users/route.js

import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import { signJwt } from "@/app/lib/jwt";

const prisma = new PrismaClient();

export async function POST(request) {
  try {
    const { email, password, name, role = "user" } = await request.json();

    if (!email || !password || !name) {
      return Response.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return Response.json(
        { error: "User already exists" },
        { status: 409 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        name,
        role,
      },
    });

    const token = signJwt({ id: user.id, email: user.email, name: user.name, role: user.role });

    return Response.json(
      { user: { id: user.id, email: user.email, name: user.name, role: user.role }, token },
      { status: 201 }
    );
  } catch (error) {
    console.error(error);
    return Response.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}