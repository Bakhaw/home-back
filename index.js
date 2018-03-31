import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

import config from './config';
import entree from './routes/entree';
import bathroom from './routes/bathroom';
import cuisine from './routes/cuisine';
import salon from './routes/salon';
import chambre from './routes/chambre';

mongoose.connect(config.mongoUrl);

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use('/entree', entree);
app.use('/bathroom', bathroom);
app.use('/cuisine', cuisine);
app.use('/salon', salon);
app.use('/chambre', chambre);

app.listen(config.port, () => console.log(`Server listening on port ${config.port}...`))