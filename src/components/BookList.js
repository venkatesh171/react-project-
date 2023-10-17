import BookShow from "./BookShow";
import { useContext } from "react";
import BooksContext from "../context/books";

export default function BookList ({books, onDelete, onUpdate}) {
    const {count, incermentCount} = useContext(BooksContext);
    const renderBooks = books.map((book) => {
        return <BookShow key={book.id} book={book} onDelete={onDelete} onUpdate={onUpdate}/>;
    });
    return <div className="book-list">
        {count}
        <button onClick={incermentCount}>Click</button>
        {renderBooks}
    </div>;
}