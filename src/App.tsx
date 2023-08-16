
import { useState } from 'react';
import './App.css';
import { ToDolist } from './ToDoList';
import { v1 } from 'uuid';
import { AddItemForm } from './AddItemForm';

export type FilterValuesType = "all" | "active" | "completed";

export type ToDoListsType = {
	id: string
	title: string
	filter: FilterValuesType
}

function App() {

	const listId1 = v1();
	const listId2 = v1();
	const listId3 = v1();

	const initLists: Array<ToDoListsType> = [
		{id: listId1, title: "What to learn", filter: "all"},
		{id: listId2, title: "Books", filter: "all"},
		{id: listId3, title: "Movie", filter: "all"},
	]

	const initTasks = {
		[listId1] : [
			{ id: v1(), name: "HTML", isDone: true },
			{ id: v1(),	name: "CSS", isDone: true	},
			{ id: v1(), name: "React", isDone: false},
			{ id: v1(), name: "Redux", isDone: false}
			],
		[listId2] : [
			{ id: v1(), name: "Fahrenheit 451", isDone: true },
			{ id: v1(),	name: "To Kill a Mockingbird", isDone: true	},
			{ id: v1(), name: "1984", isDone: false},
			{ id: v1(), name: "The Great Gatsby", isDone: false}
			
			],
		[listId3] : [
			{ id: v1(), name: "The Godfather ", isDone: true },
			{ id: v1(),	name: "Raiders of the Lost Ark", isDone: true	},
			{ id: v1(), name: "Goodfellas", isDone: false},
			{ id: v1(), name: "The Fifth Element", isDone: false}
			]
	}


	const [lists, setLists] = useState<Array<ToDoListsType>>(initLists);

	const [tasksObj, setTasks] = useState (initTasks);

	function removeList(listId: string) {
		let filteredLists = lists.filter( t => t.id !== listId);
		setLists(filteredLists);
		delete tasksObj[listId];
	};

	function removeTask(id: string, listId: string) {
		let list = tasksObj[listId]
		let filteredTasks = list.filter( t => t.id !== id);
		tasksObj[listId] = filteredTasks;
		setTasks({...tasksObj})
	};

	function changeFilter (value: FilterValuesType, listId: string){
		let list = lists.find( f => f.id === listId)
		if (list) {
			list.filter = value
			const newLists = [ ...lists];
			setLists(newLists)
		}
	}

	function addTask (newTaskName: string, listId: string) {
		let list = tasksObj[listId];
		//Create new task
		let newTask = {id: v1(), name: newTaskName, isDone: false }
		//Add new task in array 
		let newTasks = [newTask, ...list];
		//Copy new array in object
		tasksObj[listId] = newTasks
		//Update state for rerendering
		setTasks({...tasksObj})
	}

	function changeStatus(taskId: string, isDone: boolean, listId: string) {
		let list = tasksObj[listId];

		let foundedTask = list.find( t => t.id === taskId )
		if( foundedTask) {
			foundedTask.isDone = isDone
			setTasks({ ...tasksObj});
		}
	}

	function addList(newItemName: string) {
		let newList: ToDoListsType = {
			id: v1(),
			title: newItemName,
			filter: "all"
		};

		setLists([newList, ...lists]);
		//Add empty tasks in array
		setTasks( {...tasksObj,	[newList.id]: []})

	}

  return (
    <div className="App">

		<AddItemForm addItem={addList}/>

		{lists.map( (td) => {

		let forToDoTasks = tasksObj[td.id];

		if (td.filter === "active") {
			forToDoTasks = forToDoTasks.filter(t => t.isDone === false)
		}
		if (td.filter === "completed") {
			forToDoTasks = forToDoTasks.filter(t => t.isDone === true)
		}
			return (
				<ToDolist 
					key = { td.id }
					id = { td.id }
					title = {td.title} 
					tasks={forToDoTasks}
					removeTask = {removeTask}
					changeFilter = {changeFilter}
					addTask = {addTask}
					changeStatus = {changeStatus}
					filter = {td.filter}
					removeList ={removeList}
					/>
				)
			})
		}
    </div>
  );
}

export default App;
