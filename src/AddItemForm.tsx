import { useState } from "react";


type AddItemFormType = {
	addTask: (newTaskName: string) => void
	id: string
}

export function AddItemForm (props: AddItemFormType) {

	const [newItemName, setNewTaskName] = useState("");
	const [error, setError] = useState<string | null>(null);


	return (
		<div>
	<div className="list_input">
	<input
	  className={error ? "error" : ""}
	  type="text"
	  value={newItemName}
	  onChange={(e) => {
		 setNewTaskName(e.currentTarget.value);
	  }}
	  onKeyPress={(e) => {
		 setError(null);
		 if (e.charCode === 13) {
			props.addTask(newItemName);
			setNewTaskName("");
		 }
	  }}
	/>
	<button
	  className="list_button_plus"
	  onClick={() => {
		 //Check empty input and trim spaces
		 if (newItemName.trim() === "") {
			setError("Field is required");
			return;
		 }
		 props.addTask(newItemName);
		 setNewTaskName("");
	  }}
	>
	  +
	</button>
 </div>
 <div className="error_text">{error}</div>
 </div>
	)
}