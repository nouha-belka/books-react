import { useState } from "react";
import BookCreate from "./component/BookCreate";
import BookList from './component/BookList';

function App(){
    const [books, setBooks] = useState([]);

    const editBookById = (id, newTitle) => {
        const updatedBooks  = books.map((book) => {
            if(book.id === id) {
                return {...book, title:newTitle};
            }
        });
        setBooks(updatedBooks);
    };

    const deleteBookById = (id) => {
        const updatedBooks = books.filter((books) => {
            return books.id !== id;
        })
        setBooks(updatedBooks);
    };

    const createBook = (title) => {
        const updatedBooks = [...books, {id: Math.round(Math.random() * 9999 ) , title}];
        setBooks(updatedBooks);
    };
    return <div className="app">
        <h1>Readin List</h1>
        <BookList books={books} onEdit = {editBookById} onDelete={deleteBookById}/>
        <BookCreate onCreate={createBook}/>
    </div>
}

export default App;