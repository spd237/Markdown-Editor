import express, { Express, Request, Response } from 'express';

const app: Express = express();

app.get('/', (req: Request, res: Response) => {
  console.log('hello from expresso asd');
  res.status(200);
  res.json({ message: 'hi' });
});

export default app;
