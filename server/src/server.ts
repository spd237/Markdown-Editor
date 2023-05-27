import express, {
  Express,
  Request,
  Response,
  ErrorRequestHandler,
  NextFunction,
} from 'express';
import router from './router';
import cors from 'cors';
import { protect } from './modules/auth';
import { signIn, signUp } from './handlers/user';

const app: Express = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/markdown', protect, router);

app.post('/signup', signUp);
app.post('/signin', signIn);

app.use((error: any, req: Request, res: Response, next: NextFunction) => {
  if (error.type === 'auth') {
    res.status(401);
    res.json({ message: 'unauthorized' });
  } else if (error.type === 'input') {
    res.status(400);
    res.json({ message: 'invalid input' });
  } else {
    res.status(500);
    res.json({ message: 'there was a server error' });
  }
});

export default app;
