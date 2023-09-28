import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
    const [Notes, setNotes] = useState([]);

    function addNote(newNote) {
        setNotes((prevNote) => {
            return [...prevNote, newNote];
        });
    }

    function deleteNote(id) {
        setNotes((prevNote) => {
            return prevNote.filter((Notes, index) => {
                return index !== id;
            });
        });
    }

    return (
        <div>
            <Header />
            <CreateArea onAdd={addNote} />

            {Notes.map((item, index) => {
                return (
                    <Note
                        key={index}
                        id={index}
                        onDelete={deleteNote}
                        title={item.title}
                        content={item.content}
                    />
                );
            })}

            <Footer />
        </div>
    );
}

export default App;
