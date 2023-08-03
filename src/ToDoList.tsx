
type PropsType = {
	title: string
	tasks: Array<TaskType>
	removeTask: (id: number) => void
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
			<ul> {
					props.tasks.map( task => {
						return <li className="list_item">
							<input type="checkbox" checked = {task.isDone}/>{task.name}
							<button className="list_item_button" onClick={() => {props.removeTask(task.id)}}>x</button> </li>
					})
				}
			</ul>
			<div>
				<button className="list_button">All</button>
				<button className="list_button">Active</button>
				<button className="list_button">Completed</button>
			</div>
		</div>
	)
}