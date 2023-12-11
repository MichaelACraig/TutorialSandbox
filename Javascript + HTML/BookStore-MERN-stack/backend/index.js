//Imports express and PORT from express library and config.js; Storing PORT seperate for good coding practice
//This file is started/server is booted up by running "nodemon index.js" or "npm run dev"
import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import { Book } from "./models/bookModel.js";
import booksRoute from "./routes/booksRoute.js";
import cors from 'cors';


//Creates our application
const app = express();

//Middleware for handling CORS Policy
//Option 1: Allow all origins with Default of cors(*)
//app.use(cors());
//Option 2: Allow Custom Origins; Better way because we have more control over the CORS Policy
app.use(
    cors({
        origin: 'http://localhost:300',
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        allowedHeaders: ['Content-Type'], 
    })
);

//Middleware for parsing request body; Necessary for handling HTTP requests like POST (Added for Route to save a new Book)
app.use(express.json());

//Rudimentary GET request. Presents text on our webpage
app.get('/', (request, response) => {
    console.log(request);
    return response.status(234).send('This is the response of our GET request');
});

//Refactoring middleware for '/books'. If /books is used in the URL / http request, pull the routes from booksRoutes and use.
app.use('/books', booksRoute);

//Connects to the database using mongoDBURL, which is a MongoDB Atlas unique URL.
mongoose
    .connect(mongoDBURL)
    .then(() => {
        console.log("App connected to database");

        //App "tunes in" to the right port. Console message plays if the app (express) sucessfully connects to that port
        app.listen(PORT, () => {
            console.log(`App is listening to port: ${PORT}`);
        })
        
    }) //If Mongoose does not connect to the database, displat error
    .catch((error) =>{
        console.log(error);
    })