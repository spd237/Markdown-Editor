import { Request, Response, NextFunction } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';
import bcrypt from 'bcrypt';

interface User {
  id: string;
  username: string;
}

interface ExtendedRequest extends Request {
  user?: string | jwt.JwtPayload;
}

const secret = process.env.JWT_SECRET as string;
const saltRounds = 10;

export function comparePasswords(password: string, hashedPass: string) {
  return bcrypt.compare(password, hashedPass);
}

export function hashPassword(password: string) {
  return bcrypt.hash(password, saltRounds);
}

export function createJWT(user: User) {
  const token = jwt.sign({ id: user.id, username: user.username }, secret, {
    expiresIn: '1h',
  });
  return token;
}

export function protect(
  req: ExtendedRequest,
  res: Response,
  next: NextFunction
) {
  const bearer = req.headers.authorization;

  if (!bearer) {
    res.status(401);
    res.json({ message: 'not authorized' });
    return;
  }

  const [, token] = bearer.split(' ');
  if (!token) {
    res.status(401);
    res.json({ message: 'not valid token' });
    return;
  }

  try {
    const user = jwt.verify(token, secret);
    req.user = user;
    next();
  } catch (e) {
    console.log(e);
    res.status(401);
    res.json({ message: 'not valid token' });
    return;
  }
}
