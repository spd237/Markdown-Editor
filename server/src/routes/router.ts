import { Router } from 'express';

const router = Router();

router.get('/:document', (req, res) => {
  res.json({ message: 'hi!' });
});
router.put('/:document', () => {});
router.post('/:document', () => {});
router.delete('/:document', () => {});

export default router;
