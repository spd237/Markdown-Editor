import { Router } from 'express';
import { validateUpdates } from './modules/middleware';
import {
  getAllDocuments,
  createDocument,
  deleteDocument,
  getDocument,
  updateDocument,
} from './handlers/document';

const router = Router();

router.get('/', getAllDocuments);
router.get('/:id', getDocument);
router.put('/:id', validateUpdates, updateDocument);
router.post('/', createDocument);
router.delete('/:id', deleteDocument);

export default router;
