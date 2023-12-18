import BookShow from "./BookShow";

export default function BookList ({books, onDelete, onUpdate}) {
    const renderBooks = books.map((book) => {
        return <BookShow key={book.id} book={book} onDelete={onDelete} onUpdate={onUpdate}/>;
    });
    return <div className="book-list">
        {renderBooks}
    </div>;
}