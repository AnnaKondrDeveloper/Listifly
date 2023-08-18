import Button from "@mui/material/Button";
import { AddItemForm } from "./AddItemForm";
import { FilterValuesType } from "./App";
import { EditableInput } from "./EditableInput";
import { Checkbox, IconButton } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';

type PropsType = {
  id: string
  title: string
  tasks: Array<TaskType>
  removeTask: (id: string, listId: string) => void
  changeFilter: (value: FilterValuesType, id: string) => void
  addTask: (newItemName: string, listId: string) => void
  changeStatus: (taskId: string, isDone: boolean, listId: string) => void
  changeName: (taskId: string, newValue: string, listId: string) => void
  changeListTitle: (newValue: string, listId: string) => void
  filter: FilterValuesType
  removeList: (listId: string) => void
};

export type TaskType = {
  id: string;
  name: string;
  isDone: boolean;
};

export function ToDolist(props: PropsType) {


	//Wrapper for addTask to add id
	function addTask(newItemName: string) {
		props.addTask(newItemName, props.id)
	}

	function changeListTitleHandle(newValue: string) {
		props.changeListTitle(newValue, props.id)
	}

  return (
    <div className="list_items">
		<h2>
			<EditableInput name={props.title} onChangeNameHandler = {changeListTitleHandle}/> 
			<IconButton 
				aria-label="delete" 
				size="large" 
				onClick={() => props.removeList(props.id)}>
				<DeleteIcon fontSize="inherit" />
			</IconButton>
		</h2>
		<div className="list_input">
			<AddItemForm addItem={addTask}/>
		</div>

      <ul>
        {props.tasks.map((task) => {
				function onChangeNameHandler (newValue: string) {
				props.changeName(task.id, newValue, props.id)
			}

          return (
            <li
              key={task.id}
              className={`list_item ${task.isDone && "list_item_done"}`}
            >
					<Checkbox
						onChange={(e) => {
						props.changeStatus(task.id, e.currentTarget.checked, props.id);
						}}
						checked={task.isDone}
					 />
					<EditableInput name = {task.name} onChangeNameHandler={onChangeNameHandler}/>
					<IconButton aria-label="delete"                 
						onClick={() => {props.removeTask(task.id, props.id)}}>
						<DeleteIcon />
					</IconButton>
            </li>
          );
        })}
      </ul>
      <div className="list_buttons" style={{ margin: "10px" }}>
        <Button variant={props.filter === "all" ? "contained" : "text"}
          onClick={() => {
            props.changeFilter("all", props.id);
          }}
			 
        >
          All
        </Button>
        <Button variant={props.filter === "active" ? "contained" : "text"}
          onClick={() => {
            props.changeFilter("active", props.id);
          }}
        >
          Active
        </Button>
        <Button variant ={props.filter === "completed" ? "contained" : "text"}
          onClick={() => {
            props.changeFilter("completed", props.id);
          }}
        >
          Completed
        </Button>
      </div>
    </div>
  );
}





