import { PrismaClient } from "@prisma/client/extension";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const prisma = new PrismaClient();

const generateToken = (user) => {
  return jwt.sign({ id: user.id, nim: user.nim }, "secret_key", {
    expiresIn: "1d",
  });
};

const login = async (nim, password) => {
  const student = await prisma.student.findUnique({
    where: { nim },
  });

  if (!student) {
    throw new Error("Student not found");
  }

  const passwordIsMatch = await bcrypt.compare(password, student.password);

  if (!passwordIsMatch) {
    throw new Error("Password is incorrect");
  }
  const token = generateToken(student);

  return { student, token };
};

const register = async (nim, nama) => {
  const password = `unpam#${nim.slice(-6)}`;
  const hashedPassword = await bcrypt.hash(password, 10);

  const student = await prisma.student.create({
    data: {
      nim,
      nama,
      password: hashedPassword,
    },
  });
  return student;
};

const AuthService = {
  login,
  register
};

export default AuthService;
