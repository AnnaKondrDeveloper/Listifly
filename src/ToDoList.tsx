import { AddItemForm } from "./AddItemForm";
import { FilterValuesType } from "./App";

type PropsType = {
  id: string
  title: string
  tasks: Array<TaskType>
  removeTask: (id: string, listId: string) => void
  changeFilter: (value: FilterValuesType, id: string) => void
  addTask: (newTaskName: string, listId: string) => void
  changeStatus: (taskId: string, isDone: boolean, listId: string) => void
  filter: FilterValuesType
  removeList: (listId: string) => void
};

export type TaskType = {
  id: string;
  name: string;
  isDone: boolean;
};

export function ToDolist(props: PropsType) {


function addItem (newTaskName: string) {
	props.addTask(newTaskName, props.id)
}

  return (
    <div className="list_items">
		<button className="list_button_delete" onClick={() => props.removeList(props.id)}>Delete list</button>
      <h2 className="list_title">{props.title}</h2>
      <div className="list_input">
			<AddItemForm addItem={addItem}/>
      </div>
      <ul>
        {" "}
        {props.tasks.map((task) => {
          return (
            <li
              key={task.id}
              className={`list_item ${task.isDone && "list_item_done"}`}
            >
              <input
                type="checkbox"
                onChange={(e) => {
                  props.changeStatus(task.id, e.currentTarget.checked, props.id);
                }}
                checked={task.isDone}
              />{" "}
              {task.name}
              <button
                className="list_item_button"
                onClick={() => {
                  props.removeTask(task.id, props.id);
                }}
              >
                x
              </button>{" "}
            </li>
          );
        })}
      </ul>
      <div className="list_buttons">
        <button
          className={`list_button ${
            props.filter === "all" ? "list_button_active" : ""
          }`}
          onClick={() => {
            props.changeFilter("all", props.id);
          }}
        >
          All
        </button>
        <button
          className={`list_button ${
            props.filter === "active" ? "list_button_active" : ""
          }`}
          onClick={() => {
            props.changeFilter("active", props.id);
          }}
        >
          Active
        </button>
        <button
          className={`list_button ${
            props.filter === "completed" ? "list_button_active" : ""
          }`}
          onClick={() => {
            props.changeFilter("completed", props.id);
          }}
        >
          Completed
        </button>
      </div>
    </div>
  );
}


