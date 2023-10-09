import { useState } from "react";
import BookCreate from "./components/BookCreate";
export default function App () {
    const [books, setBooks] = useState([]);

    const createBook = (title) => {
        setBooks([...books, ]);
    };

    return (
    <div>
        <BookCreate onCreate={createBook} />
    </div>
    );
}