import express, { Express, Request, Response } from 'express';
import router from './router';
import cors from 'cors';
import { protect } from './modules/auth';
import { signIn, signUp } from './handlers/user';

const app: Express = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req: Request, res: Response) => {
  res.status(200);
  res.json({ message: 'hi' });
});

app.use('/markdown', protect, router);

app.post('/signup', signUp);
app.post('/signin', signIn);

export default app;
