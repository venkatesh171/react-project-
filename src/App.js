import { useState, useEffect } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import axios from "axios";

export default function App () {
    const [books, setBooks] = useState([]);

    const fetchBooks = async() => {
        const response = await axios.get("http://localhost:3001/books");
        setBooks(response.data);
    };

    useEffect(()=> {
        fetchBooks();
    }, [])

    const createBook = async(title) => {
        if (title===""){
            console.log("title is empty");
        } else {
            const response = await axios.post('http://localhost:3001/books', {
                title
            });
            const updatedBooks = [...books, response.data];
            setBooks(updatedBooks);
        }
    };

    const deleteBookById = async(id) => {
        await axios.delete(`http://localhost:3001/books/${id}`);
        const updatedBooks = books.filter((book) => {
            return book.id !== id;
        });
        setBooks(updatedBooks);
    };

    const updateBookById = async(id, title) => {
        const response = await axios.put(`http://localhost:3001/books/${id}`,{
            title
        });
        const updateBooks = books.map(book => {
            if(book.id === id) {
                return {...book, ...response.data};
            }
            return book;
        });
        setBooks(updateBooks);
    };

    return (
    <div className="app">
        <h1>Reading List</h1>
        <BookList books = {books} onDelete={deleteBookById} onUpdate={updateBookById}/>
        <BookCreate onCreate={createBook} />
    </div>
    );
}