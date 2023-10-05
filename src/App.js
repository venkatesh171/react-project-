import { useState } from "react";
import BookCreate from "./components/BookCreate";
export default function App () {
    const [books, setBooks] = useState([]);

    const createBook = (title) => {
        console.log("Need to add book with title:", title);
    };

    return (
    <div>
        <BookCreate onCreate= {createBook} />
    </div>
    );
}