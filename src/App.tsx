
import { useState } from 'react';
import './App.css';
import { TaskType, ToDolist } from './ToDoList';
import { v1 } from 'uuid';

export type FilterValuesType = "all" | "active" | "completed";

function App() {

	const initTasks: Array<TaskType> = [
		{ id: v1(), name: "HTML", isDone: true },
		{ id: v1(),	name: "CSS", isDone: true	},
		{ id: v1(), name: "React", isDone: false},
		{ id: v1(), name: "Redux", isDone: false}
	];
	
	// const tasks2: Array<TaskType> = [
	// 	{ id: 1, name: "Fahrenheit 451", isDone: true },
	// 	{ id: 2,	name: "To Kill a Mockingbird", isDone: true	},
	// 	{ id: 3, name: "1984", isDone: false}
	// ];
	
	// const tasks3: Array<TaskType> = [
	// 	{ id: 1, name: "The Godfather ", isDone: true },
	// 	{ id: 2,	name: "Raiders of the Lost Ark", isDone: true	},
	// 	{ id: 3, name: "Goodfellas", isDone: false}
	// ]

	const [tasks, setTasks] = useState (initTasks);

	const [filter, setFilter] = useState<FilterValuesType>("all");

	function removeTask(id: string) {
		let filteredTasks = tasks.filter( t => t.id !== id);
		setTasks(filteredTasks)
	};

	function changeFilter (value: FilterValuesType){
		setFilter(value)
	}

	function addTask (newTaskName: string) {
		let newTask = {id: v1(), name: newTaskName, isDone: false }
		let newTasks = [newTask, ...tasks]
		setTasks(newTasks)
	}

	let forToDoTasks = tasks;

		if (filter === "active") {
			forToDoTasks = tasks.filter(t => t.isDone === false)
		}
		if (filter === "completed") {
			forToDoTasks = tasks.filter(t => t.isDone === true)
		}

	function changeStatus(taskId: string, isDone: boolean) {

		let foundedTask = tasks.find( t => t.id === taskId )
		if( foundedTask) {
			foundedTask.isDone = isDone
		}
    //Create copy for rerender App
		const copyTasks = [ ...tasks ]
		setTasks(copyTasks);
	}


  return (
    <div className="App">
			<ToDolist 
			title = "What to learn" 
			tasks={forToDoTasks}
			removeTask = {removeTask}
			changeFilter = {changeFilter}
			addTask = {addTask}
			changeStatus = {changeStatus}
			/>
			{/* <ToDolist title = "Books" tasks={tasks2}/>
			<ToDolist title = "Movie" tasks={tasks3}/> */}
    </div>
  );
}

export default App;
