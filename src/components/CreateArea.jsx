import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";

function CreateArea(props) {
	const [isExpanded, setIsExpanded] = useState(false);

	const expand = () => {
		setIsExpanded(true);
	};

	const [note, setNote] = useState({
		// create note object to store title and content of new note
		title: "",
		content: "",
	});

	const handleChange = (event) => {
		const { name, value } = event.target;
		setNote((prevValue) => {
			// update title and content of new note
			return {
				...prevValue,
				[name]: value,
			};
		});
	};

	return (
		<div>
			<form className="create-note">
				{isExpanded && (
					<input
						name="title"
						placeholder="Title"
						onChange={handleChange}
						value={note.title}
					/>
				)}
				<textarea
					name="content"
					placeholder="Take a note..."
					rows={isExpanded ? "3" : "1"}
					onChange={handleChange}
					value={note.content}
					onClick={expand}
				/>
				<Zoom in={isExpanded ? true : false}>
					<Fab
						onClick={(event) => {
							props.onSubmit(note); // send new note to App.jsx
							event.preventDefault();
							setNote(() => {
								// reset input fields after submit is clicked
								return {
									title: "",
									content: "",
								};
							});
						}}
					>
						<AddIcon />
					</Fab>
				</Zoom>
			</form>
		</div>
	);
}

export default CreateArea;
