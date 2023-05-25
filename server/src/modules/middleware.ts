import { Request, Response, NextFunction } from 'express';
import { validationResult } from 'express-validator';
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

export const handleInputErrors = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(400);
    res.json({ errors: errors.array() });
  } else {
    next();
  }
};
