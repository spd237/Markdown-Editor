import { Request, Response } from 'express';
import prisma from '../db';

export const getDocument = async (req: Request, res: Response) => {
  const name = req.params.document;

  const document = await prisma.document.findFirst({
    where: {
      name: name,
      authorID: req.user.id,
    },
  });

  res.json({ data: document });
};

export const createDocument = async (req: Request, res: Response) => {
  const document = await prisma.document.create({
    data: {
      name: req.body.name,
      content: req.body.content,
      authorID: req.user.id,
    },
  });

  res.json({ data: document });
};
const l = 1;
export const updateDocument = async (req: Request, res: Response) => {
  const document = await prisma.document.findFirst({
    where: {
      name: req.params.document,
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
};

export const deleteDocument = async (req: Request, res: Response) => {
  const document = await prisma.document.findFirst({
    where: {
      name: req.params.document,
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
};
