import { useState } from "react";
import BookCreate from "./component/BookCreate";
import BookList from './component/BookList';

function App(){
    const [books, setBooks] = useState([]);

    const deleteBookById = (id) => {
        const updatedBooks = books.filter((books) => {
            return books.id !== id;
        })
        setBooks(updatedBooks);
    }

    const createBook = (title) => {
        const updatedBooks = [...books, {id: Math.round(Math.random() * 9999 ) , title}];
        setBooks(updatedBooks);
    };
    return <div className="app">
        <BookList books={books} onDelete={deleteBookById}/>
        <BookCreate onCreate={createBook}/>
    </div>
}

export default App;