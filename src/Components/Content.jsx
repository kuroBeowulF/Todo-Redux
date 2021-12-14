import AddTodo from "./AddTodo";
import TodosList from "./TodosList";
import { useSelector } from "react-redux";

const Content = () => {
  const todos = useSelector((state) => state.addTodoReducer);
  const doneTasks = todos.filter((todo) => todo.compeleted === true).length;
  const leftTasks = todos.filter((todo) => todo.compeleted !== true).length;
  return (
    <div className="contentBox">
      {todos.length === 0 ? (
        ""
      ) : (
        <ul className="ul">
          <li>
            <span className="ulTitle">Tasks</span>
            <span className="ulInfo">{todos.length}</span>
          </li>
          <li>
            <span className="ulTitle">Done</span>
            <span className="ulInfo">{doneTasks}</span>
          </li>
          <li>
            <span className="ulTitle">Left</span>
            <span className="ulInfo">{leftTasks}</span>
          </li>
        </ul>
      )}
      <AddTodo />
      <TodosList />
    </div>
  );
};
export default Content;
