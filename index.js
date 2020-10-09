import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import cors from 'cors';
import sendRoutes from './Routes/SendRoutes';

dotenv.config()


const app = express();

// Connection object which contains the constant for the port and the database
let connection_config = {
    port: process.env.PORT,
}

if( process.env.NODE_ENV == 'development'){
    connection_config.port = 3333;
    
}

connection_config.port = process.env.NODE_ENV == 'development'? 3333 : connection_config.port

app.use(bodyParser.urlencoded({
    extended: true
}));

// application/json parsing json incoming request

app.use(bodyParser.json());

//allowing CORS
app.use(cors());

//Application routes
app.use('/api/v1', sendRoutes);
//routes ends here
app.use('/', (req, res)=> {
    res.status(200).json({
        statusCode: 200,
        message: 'Welcome to Mailer API'
    })
} )

app.use((error, req, res, next) => {
    //console.log(error);
    const status = error.statusCode || 500;
    const message = error.message;

    res.status(status).json({
        message: message,
        statusCode: status
    });
});

    app.listen(connection_config.port, () => {
        console.log('Server running at ' + connection_config.port);
    });
