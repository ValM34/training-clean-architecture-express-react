import express from 'express'
import dotenv from 'dotenv'
import taskRouter from './routes/taskRouter.ts'

dotenv.config({ path: './.env.local' })
const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

app.use('/api/task', taskRouter);

export default app;
