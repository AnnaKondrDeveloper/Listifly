
type PropsType = {
	title: string
	tasks: Array<TaskType>
}

export type TaskType ={
	id: number
	name: string
	isDone: boolean
}


export function ToDolist(props:PropsType) {
	return (
		<div className="list_items">
		<h2 className="list_title">{props.title}</h2>
		<div>
			<input type="text" />
			<button className="list_button_plus">+</button>
		</div>
			<ul>
				<li className="list_item"><input type="checkbox" checked = {props.tasks[0].isDone}/>{props.tasks[0].name}</li>
				<li className="list_item"><input type="checkbox" checked = {props.tasks[1].isDone}/>{props.tasks[1].name}</li>
				<li className="list_item"><input type="checkbox" checked = {props.tasks[2].isDone}/>{props.tasks[2].name}</li>
			</ul>
			<div>
				<button className="list_button">All</button>
				<button className="list_button">Active</button>
				<button className="list_button">Completed</button>
			</div>
		</div>
	)
}