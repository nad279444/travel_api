import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import helmet from 'helmet';
import cors from 'cors';
import mongoose from 'mongoose';
import  {notFound,otherErrors } from './errorMiddlewares.js';
import router from './api/routes/travelLogs.js'

const app = express();
dotenv.config()

const port = process.env.PORT || 1337

//middlewares
app.use(morgan('common'));
app.use(helmet());
app.use(cors());
app.use(express.json())

//routes
app.use ('/routes',router)

const db = process.env.DATABASE_URL

mongoose.connect(db,
    {useNewUrlParser:true,useUnifiedTopology:true})
    .then(() => {console.log('database is connected live')}).catch((error) => `unable to connect ${error.message}` )
    




//error handling
app.use(notFound);
app.use(otherErrors);



app.listen(port, () => {
    console.log(`listening on port ${port}`)
})

