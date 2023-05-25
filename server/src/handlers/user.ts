import prisma from '../db';
import { NextFunction, Request, Response } from 'express';
import { comparePasswords, createJWT, hashPassword } from '../modules/auth';

export const signUp = async (req: Request, res: Response) => {
  const user = await prisma.user.create({
    data: {
      username: req.body.username,
      password: await hashPassword(req.body.password),
    },
  });

  const token = createJWT(user);
  res.json({ token: token });
};

export const signIn = async (req: Request, res: Response) => {
  const user = await prisma.user.findUnique({
    where: {
      username: req.body.username,
    },
  });

  if (!user) {
    res.status(401);
    res.json({ message: 'user does not exist' });
    return;
  }

  const isValid = await comparePasswords(req.body.password, user.password);

  if (!isValid) {
    res.status(401);
    res.json({ message: 'wrong password' });
  }

  const token = createJWT(user);
  res.json({ token: token });
};
