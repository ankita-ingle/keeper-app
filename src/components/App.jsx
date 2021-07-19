import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
	const [noteList, setNoteList] = useState([]); // array to store all notes

	const onSubmit = (note) => {
		setNoteList((prevValue) => {
			return [...prevValue, note]; // add new note to noteList array
		});
	};

	const deleteNote = (toBeDeleted) => { // function to delete a note from noteList
		setNoteList((prevValue) => {
			return prevValue.filter((item, index) => {
				return toBeDeleted !== index; // return array of notes excluding the note to be deleted
			});
		});
	};

	return (
		<div className="App">
			<Header />
			<CreateArea onSubmit={onSubmit} />
			{noteList.map((note, index) => (
				<Note
					key={index}
					id={index}
					title={note.title}
					content={note.content}
					deleteNote={deleteNote}
				/>
			))}

			<Footer />
		</div>
	);
}

export default App;
