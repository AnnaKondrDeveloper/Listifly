import { useState } from "react";


type AddItemFormType = {
	addItem: (newItemName: string) => void
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
			props.addItem(newItemName);
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
		 props.addItem(newItemName);
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