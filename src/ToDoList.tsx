import { useState } from "react"
import { FilterValuesType } from "./App"

type PropsType = {
	title: string
	tasks: Array<TaskType>
	removeTask: (id: string) => void
	changeFilter: (value: FilterValuesType) => void
	addTask: (newTaskName: string) => void
}

export type TaskType ={
	id: string
	name: string
	isDone: boolean
}

export function ToDolist(props:PropsType) {

	const [newTaskName, setNewTaskName] = useState("")

	return (
		<div className="list_items">
		<h2 className="list_title">{props.title}</h2>
		<div>
			<input type="text" value = {newTaskName} 
			onChange = {(e) => {
					setNewTaskName(e.currentTarget.value);
				}}
				onKeyPress = {(e) => {
					if (e.charCode === 13) {
						props.addTask(newTaskName);
						setNewTaskName("");
					}
				}}
				/>
				
			<button className="list_button_plus" onClick = { () => {
				props.addTask(newTaskName);
				setNewTaskName("");
					}
				}>+</button>
		</div>
			<ul> {
					props.tasks.map( task => {
						return <li key={task.id} className="list_item">
							<input type="checkbox" checked = {task.isDone}/>{task.name}
							<button className="list_item_button" onClick={() => {props.removeTask(task.id)}}>x</button> </li>
					})
				}
			</ul>
			<div>
				<button className="list_button" onClick={() => {props.changeFilter("all")}}>All</button>
				<button className="list_button" onClick={() => {props.changeFilter("active")}}>Active</button>
				<button className="list_button" onClick={() => {props.changeFilter("completed")}}>Completed</button>
			</div>
		</div>
	)
}