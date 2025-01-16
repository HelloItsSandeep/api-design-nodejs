import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

interface User {
  id: string;
  username: string;
}

declare global {
  namespace Express {
    interface Request {
      user?: User;
    }
  }
}

export const createJWT = (user: User) => {
  if (!process.env.JWT_SECRET) {
    throw new Error("JWT_SECRET is not defined in environment variables");
  }

  const token = jwt.sign(
    { id: user.id, username: user.username },
    process.env.JWT_SECRET
  );

  return token;
};

export const protect = (req: Request, res: Response, next: NextFunction) => {
  const bearer = req.headers.authorization;

  if (!bearer || !bearer.startsWith("Bearer ")) {
    res.status(401);
    res.json({ message: "Not authorized, token missing or invalid" });
    return;
  }

  const token = bearer.split(" ")[1];

  try {
    const secret = process.env.JWT_SECRET;

    if (!secret) {
      throw new Error("JWT_SECRET is not defined in environment variables");
    }

    const decoded = jwt.verify(token, secret) as {
      id: string;
      username: string;
    };

    req.user = decoded;
    next();
  } catch (e) {
    res.status(401).json({ message: "Not authorized, invalid token" });
    return;
  }
};
