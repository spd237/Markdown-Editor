import { Router } from 'express';
import { Request, Response } from 'express';
import { body } from 'express-validator';
import { handleInputErrors, validateUpdates } from './modules/middleware';
import {
  createDocument,
  deleteDocument,
  getDocument,
  updateDocument,
} from './handlers/document';

const router = Router();

router.get('/:document', getDocument);
router.put('/:document', validateUpdates, updateDocument);
router.post(
  '/',
  body('name').isString(),
  body('content').optional(),
  handleInputErrors,
  createDocument
);
router.delete('/:document', deleteDocument);

export default router;
