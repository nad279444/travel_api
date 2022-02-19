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


app.listen(port, () => {
    console.log(`listening on port ${port}`)
})

