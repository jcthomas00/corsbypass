import express from 'express';
import bodyParser from 'body-parser';
import usersRoutes from './routes/users.js';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 6000;

app.use(bodyParser.json());
app.use(cors());

app.use('/cors', usersRoutes);
app.get('/', (request, response) => {
    response.send("Contact Jacob.Thomas@outlook.com for more information");
})
app.listen(PORT, () => { console.log(`Server running on Port: ${PORT}`) });