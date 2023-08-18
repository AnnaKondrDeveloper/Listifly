import { SvgIcon, TextField } from "@mui/material";
import { useState } from "react";
import AddIcon from '@mui/icons-material/Add';


type AddItemFormType = {
	addItem: (newItemName: string) => void
}

export function AddItemForm (props: AddItemFormType) {

	const [newItemName, setNewTaskName] = useState("");
	const [error, setError] = useState<string | null>(null);


	return (
		<div>
			<div className="list_input">
				<TextField variant="outlined" 
					error = {!!error}
					helperText={error}
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
					}}/>
				<SvgIcon
					color="primary"
					component = {AddIcon}
					sx={{ fontSize: 40 }}
					onClick={() => {
						//Check empty input and trim spaces
						if (newItemName.trim() === "") {
						setError("Field is required");
						return;
						}
						props.addItem(newItemName);
						setNewTaskName("");
					}}
				/>
			</div>
 		</div>
	)
}