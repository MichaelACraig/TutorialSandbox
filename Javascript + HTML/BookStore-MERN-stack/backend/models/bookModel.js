import mongoose from "mongoose";

//Essentially a class that stores the information of each data point
const bookSchema = mongoose.Schema({
    title:{
        type: String,
        required: true,
    },
    author:{
        type: String,
        required: true,
    },
    publishYear: {
        type: Number,
        required: true,
    },
},
{
    //Allows for timestamps to be included with each data point (i.e time of creation, edit, etc.)
    timestamps: true,
}
);

//Allows us to export this Book variable that is named Cat, and follows the bookSchema layout
//Take note of mongoose.model() method
export const Book = mongoose.model('Cat', bookSchema);