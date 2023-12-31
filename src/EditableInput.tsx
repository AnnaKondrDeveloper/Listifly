import { TextField } from "@mui/material";
import { useState } from "react"


type EditableInputPropsType = {
	name: string
	onChangeNameHandler: (newValue: string) => void;
}

export function EditableInput (props: EditableInputPropsType) {

	const [ editMode, setEditMode ] = useState(false);
	const [ text, setText ] = useState("")

	function activateEditMode () {
		setText(props.name)
		setEditMode(true);
	};

	function activateViewMode () {
		setEditMode(false);
		props.onChangeNameHandler(text);
	}
	
	return (
		editMode 

		? <TextField 
				id="standard-basic" 
				variant="standard" 
				value={text} 
				autoFocus 
				onBlur={() => activateViewMode()} 
				onChange={(e) => {setText(e.currentTarget.value)}}
				/>
		: <span onDoubleClick={() => {activateEditMode()}}> {props.name}</span>
	)
	

}