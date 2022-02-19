import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import helmet from 'helmet';
import cors from 'cors';

const app = express();

const port = process.env.PORT || 1337

//middlewares
app.use(morgan('common'));
app.use(helmet());
app.use(cors());

//routes
app.get('/',(req,res) => {
    res.json({
       message: 'it works' 
    })
})

//error handling
app.use((req,res,next) => {
    const error = new Error('this is the wrong route');
    res.status(404);
    next(error);
})

app.use((error,req,res,next) => {
    const statusCode =  res.statusCode === 200 ? 500: res.statusCode
    res.json({
        message: error.message
    })
})



app.listen(port, () => {
    console.log(`listening on port ${port}`)
})

