import express from "express";
import { Book } from "../models/bookModel.js";

//Uses express router here instead of .app after refactor
const router = express.Router();

//in our index.js, since we are calling for /books, they aren't nessary in the router calls and can be deleted

//Route for Save a new Book
router.post('/', async (request, response) => {
    try{
        if( //If a data field is not filled, send a message to the client asking for all required fields
            !request.body.title ||
            !request.body.author ||
            !request.body.publishYear

        ) {
            return response.status(400).send({
                message: 'Please send all required fields: title, author, publishYear',
            })
        }
        const newBook = { //Requests the data from the client and places it into the correct variables
            title: request.body.title,
            author: request.body.author,
            publishYear: request.body.publishYear,
        };

        //Waits until the book keyword is called before creating a book with the newBook data given by client
        const book = await Book.create(newBook);

        return response.status(201).send(book); //Sends to database
    }
    catch (error){ //If something goes wrong above, display error message
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

//Route to get all books from the database
router.get('/', async (request, response) => {
    try{
        //Awaits to be used; an array of books from the database
        const books = await Book.find({});

        return response.status(200).json({
            //Returns the count of how many book objects are in the database
            count: books.length,
            //Prints out the array of book data
            data: books
        });
    }
    catch(error){
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

//Route to get One book from the database via ID
router.get('/:id', async (request, response) => {
    try{
        const { id } = request.params;

        //Awaits to be used; an array of books from the database
        const book = await Book.findById(id);

        return response.status(200).json(book);
    }
    catch(error){
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

//Route to Update a Book, app.put() is called to update.
router.put('/:id', async (request, response) => {
    try{
        if( //If one of these is not available, return message saying these fields are required.
            !request.body.title ||
            !request.body.author ||
            !request.body.publishYear
        ){
            return response.status(400).send({
                message: 'Please send all required fields: title, author, pubishYear',
            });
        }
        //Finds the book inside the database by the ID
        const{ id } = request.params;

        //Updates the information with the inputed json above
        const result = await Book.findByIdAndUpdate(id, request.body);

        if(!result){ //If book is not in the database/ID is not found, and getting variable result fails
            return response.status(404).json({message: 'Book not found' });
        }

        //Else, result succeeds and the book is updated
        return response.status(200).send({ message: 'Book updated successfully!' });
    }
    catch(error){
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

//Route for deleting a book, app.delete() is called for deletion
router.delete('/:id', async (request, response) => {
    try{
        const { id } = request.params;

        const result = await Book.findByIdAndDelete(id);

        if(!result){
            return response.status(404).json({message: "Book was not found"});
        }

        return response.status(200).send({message: "Book was successfully deleted!"});
    }
    catch(error){
        console.log(error.message);
        response.stataus(500).send({ message: error.message });
    }
});

export default router;