import { Request, Response, NextFunction } from 'express';

export const validateUpdates = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { name, content } = req.body;

  if (!name && !content) {
    res.status(400);
    res.json({
      message: 'at least one of the content or document name must be updated',
    });
  }

  next();
};
