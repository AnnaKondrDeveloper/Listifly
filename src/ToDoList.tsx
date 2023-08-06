import { useState } from "react"
import { FilterValuesType } from "./App"

type PropsType = {
	title: string
	tasks: Array<TaskType>
	removeTask: (id: string) => void
	changeFilter: (value: FilterValuesType) => void
	addTask: (newTaskName: string) => void
	changeStatus: (taskId: string, isDone: boolean ) => void
	filter: FilterValuesType
}

export type TaskType ={
	id: string
	name: string
	isDone: boolean
}

export function ToDolist(props:PropsType) {

	const [newTaskName, setNewTaskName] = useState("");
	const [error, setError] = useState<string | null>(null)

	return (
		<div className="list_items">
		<h2 className="list_title">{props.title}</h2>
		<div>
			<input className={error ? "error" : ""} type="text" value = {newTaskName} 
			onChange = {(e) => {
					setNewTaskName(e.currentTarget.value);
				}}
				onKeyPress = {(e) => {
					setError(null)
					if (e.charCode === 13) {
						props.addTask(newTaskName);
						setNewTaskName("");
					}
				}}
				/>
			<button className="list_button_plus" onClick = { () => {
				//Check empty input and trim spaces
				if ( newTaskName.trim() === "") {
					setError("Field is required")
					return
				}
				props.addTask(newTaskName);
				setNewTaskName("");
					}
				}>+</button>
				<div className="error_text">{error}</div>
		</div>
			<ul> {
					props.tasks.map( task => {
						return <li key={task.id} className={`list_item ${ task.isDone && "list_item_done"}`}>
							<input type="checkbox"
							onChange = { (e) => {
								props.changeStatus(task.id, e.currentTarget.checked)}}
							checked = {task.isDone}
							 />{task.name}
							<button className="list_item_button" onClick={() => {props.removeTask(task.id)}}>x</button> </li>
					})
				}
			</ul>
			<div className = "list_buttons">
				<button className= {`list_button ${ props.filter === "all" ? "list_button_active" : ""}`} onClick={() => {props.changeFilter("all")}}>All</button>
				<button className={`list_button ${ props.filter === "active" ? "list_button_active" : ""}`}  onClick={() => {props.changeFilter("active")}}>Active</button>
				<button className={`list_button ${ props.filter === "completed" ? "list_button_active" : ""}`}  onClick={() => {props.changeFilter("completed")}}>Completed</button>
			</div>
		</div>
	)
}