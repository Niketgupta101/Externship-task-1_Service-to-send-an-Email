import express from 'express';
import bodyParser from 'body-parser';
import routes from './routes/routes.js';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.use('/',routes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`listening at port: ${PORT}`));