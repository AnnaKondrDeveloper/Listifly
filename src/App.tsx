
import './App.css';
import { TaskType, ToDolist } from './ToDoList';


function App() {

	const tasks1: Array<TaskType> = [
		{ id: 1, name: "HTML", isDone: true },
		{ id: 2,	name: "CSS", isDone: true	},
		{ id: 3, name: "React", isDone: false}
	];
	
	const tasks2: Array<TaskType> = [
		{ id: 1, name: "Fahrenheit 451", isDone: true },
		{ id: 2,	name: "To Kill a Mockingbird", isDone: true	},
		{ id: 3, name: "1984", isDone: false}
	];
	
	const tasks3: Array<TaskType> = [
		{ id: 1, name: "The Godfather ", isDone: true },
		{ id: 2,	name: "Raiders of the Lost Ark", isDone: true	},
		{ id: 3, name: "Goodfellas", isDone: false}
	]

  return (
    <div className="App">
			<ToDolist title = "What to learn" tasks={tasks1}/>
			<ToDolist title = "Books" tasks={tasks2}/>
			<ToDolist title = "Movie" tasks={tasks3}/>
    </div>
  );
}

export default App;
