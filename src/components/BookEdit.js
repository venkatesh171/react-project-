import { useState } from "react";

export default function BookEdit ({book, onUpdate, onEdit}) {
    const [title, setTitle] = useState(book.title);

    const handleFormSubmit = (event) => {
        event.preventDefault();
        onUpdate(book.id, title);
        onEdit();
    };

    const handleChange = (event) => {
        setTitle(event.target.value);
    }; 


    return (
        <form className="book-edit" onSubmit={handleFormSubmit}>
            <label>Title</label>
            <input className="input" value={title} onChange={handleChange}/>
            <button className="button is-primary">
                save
            </button>
        </form>
    );
}