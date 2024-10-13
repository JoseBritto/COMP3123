const express = require("express")
const BookModel = require("../models/book")


const routes = express.Router()

//Get All Books
routes.get("/books", (req, res) => {
    BookModel.find()
    .then((books)=> {
        res.send(books);
    }).catch((err) => {
        res.status(500).send({message: err.message})
    });
    //res.send({message: "Get All Books"})
})

//Add NEW Book
routes.post("/books", async (req, res) => {
    const bookData = req.body
    const book = new BookModel(bookData)
    try {
        const newBook = await book.save()
    } catch (err) {
        res.status(500).send({message: err.message})
    }
    res.send({message: "Add NEW Book"})
})

//Update existing Book By Id
routes.put("/book/:bookid", async (req, res) => {

    try {
        const book = await BookModel.findByIdAndUpdate(req.params.bookid, req.body, {new: true});
        await book.save()
        if(book){
            res.send({message: "Update existing Book By Id"})
        } else {
            res.status(404).send({message: "Book Not Found"});
        }
    } catch (err) {
        res.status(500).send({message: err.message});   
    }
})

//Delete Book By ID
routes.delete("/book/:bookid", (req, res) => {
    BookModel.findByIdAndDelete(req.params.bookid).then((book) => {
        if(book) {
            res.send(book)
        } else {
            res.status(404).send({message: "Book not found"})
        }
    }).catch((err) => {
        res.status(500).send({message: err.message})
    })
    // res.send({message: "Delete Book By ID"})
})

//Get Book By ID
routes.get("/book/:bookid", (req, res) => {
    res.send({message: "Get Book By ID"})
})

//Get All Books in sorted order
routes.get("/books/sort", (req, res) => {
    res.send({message: "Get All Books in sorted order"})
})

module.exports = routes