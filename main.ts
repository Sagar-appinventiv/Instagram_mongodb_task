import express from 'express';
import * as dotenv from 'dotenv';
import { dbConnection } from './src/database/database';
dotenv.config();

const app = express();

const port = process.env.PORT;
app.use(express.json());
dbConnection();

app.listen(port, () => {
    console.log(`server is Listening at http://localhost:${port}`);
});