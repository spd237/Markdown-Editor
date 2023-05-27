import { NextFunction, Request, Response } from 'express';
import prisma from '../db';

export const getAllDocuments = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = await prisma.user.findUnique({
      where: {
        id: req.user.id,
      },
      include: {
        documents: true,
      },
    });

    res.json({ data: user?.documents });
  } catch (e) {
    next(e);
  }
};

export const getDocument = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const document = await prisma.document.findFirst({
      where: {
        id: req.params.id,
        authorID: req.user.id,
      },
    });

    if (!document) {
      res.status(400);
      res.json({ message: 'wrong doc ID or unauthorized' });
      return;
    } else {
      res.json({ data: document });
    }
  } catch (e) {
    next(e);
  }
};

export const createDocument = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const document = await prisma.document.create({
      data: {
        name: req.body.name,
        content: req.body.content,
        authorID: req.user.id,
      },
    });
    res.json({ data: document });
  } catch (e) {
    next(e);
  }
};

export const updateDocument = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const document = await prisma.document.findFirst({
      where: {
        id: req.params.id,
        authorID: req.user.id,
      },
    });

    if (!document) {
      res.status(404);
      res.json({ message: 'document not found or unauthorized' });
      return;
    }

    const updated = await prisma.document.update({
      where: {
        id: document.id,
      },
      data: {
        name: req.body.name,
        content: req.body.content,
      },
    });
    res.json({ data: updated });
  } catch (e: any) {
    console.log(e);
    e.type = 'input';
    next(e);
  }
};

export const deleteDocument = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const document = await prisma.document.findFirst({
      where: {
        id: req.params.id,
        authorID: req.user.id,
      },
    });
    if (!document) {
      res.status(404);
      res.json({ message: 'document not found or unauthorized' });
      return;
    }

    const deleted = await prisma.document.delete({
      where: {
        id: document.id,
      },
    });
    res.json({ data: deleted });
  } catch (e) {
    next(e);
  }
};
