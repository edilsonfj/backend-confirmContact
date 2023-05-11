require('dotenv').config();
import express from 'express';
import { router } from './routes/router';

const PORT = process.env.PORT;
const app = express();

app.use(express.json());
app.use(router);

app.listen(PORT, () => console.log(`🖥️  Server is running!`))