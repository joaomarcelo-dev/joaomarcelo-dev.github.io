import exprees from 'express';
import userRoutes from '../routes/users.routes';
import cors from 'cors';


const app = exprees();
app.use(exprees.json());
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'PATCH', 'HEAD', 'TRACE', 'CONNECT'],
}));

app.get('/', (req, res) => {
  return res.json({ message: 'Hello World' });
});

app.use('/login', userRoutes)


export {
  app,
}