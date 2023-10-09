import { useState } from "react";

export default function BookCreate ({ onCreate }) {

    const [title, setTitle] = useState("");

    const handleFormSubmit = (event) => {
        event.preventDefault();
        onCreate(title);
        setTitle("");
    };

    const handleChange = (event) => {
        setTitle(event.target.value);
    }; 

    return (
        <div className="book-create">
            <h3>Add a Book</h3>
            <form onSubmit={handleFormSubmit}>
                <label>Titile</label>
                <input className="input" type="text" value={title} onChange={handleChange}/>
                <button className="button">Submit</button>
            </form>
        </div>
    );
}