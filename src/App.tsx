
import { useState } from 'react';
import './App.css';
import { TaskType, ToDolist } from './ToDoList';

export type FilterValuesType = "all" | "active" | "completed";

function App() {

	let initTasks: Array<TaskType> = [
		{ id: 1, name: "HTML", isDone: true },
		{ id: 2,	name: "CSS", isDone: true	},
		{ id: 3, name: "React", isDone: false},
		{ id: 4, name: "Redux", isDone: false}
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




	let [tasks, setTasks] = useState (initTasks);

	let [filter, setFilter] = useState<FilterValuesType>("all");

	function removeTask(id: number) {
		let filteredTasks = tasks.filter( t => t.id !== id);
		setTasks(filteredTasks)
	};

	function changeFilter (value: FilterValuesType){
		setFilter(value)
	}

	let forToDoTasks = tasks;

		if (filter === "active") {
			forToDoTasks = tasks.filter(t => t.isDone === false)
		}
		if (filter === "completed") {
			forToDoTasks = tasks.filter(t => t.isDone === true)
		}


  return (
    <div className="App">
			<ToDolist 
			title = "What to learn" 
			tasks={forToDoTasks}
			removeTask = {removeTask}
			changeFilter = {changeFilter}
			/>
			{/* <ToDolist title = "Books" tasks={tasks2}/>
			<ToDolist title = "Movie" tasks={tasks3}/> */}
    </div>
  );
}

export default App;
