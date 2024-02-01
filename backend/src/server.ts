import dotenv from 'dotenv';
import { app } from './app';

dotenv.config();

const portServer = process.env.PORT_SERVER || 3333;
app.listen(portServer, () => console.log(`Server is running on port ${portServer}`));

