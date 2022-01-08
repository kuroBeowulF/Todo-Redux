import { useSelector } from "react-redux";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { Checkbox } from "antd";
import { Link } from "react-router-dom";
import {
  RemoveTodo,
  HandleTrue,
  HandleFalse,
  SetValue,
} from "../Redux/Action/Actions";

const TodosList = () => {
  const todos = useSelector((state) => state.addTodoReducer);
  const dispatch = useDispatch();
  return (
    <div className="todosList">
      {todos.map((todo) => (
        <div className="todo" key={todo.id}>
          <span style={{ marginRight: 10 }}>
            <Checkbox
              checked={todo.compeleted}
              onChange={(e) =>
                e.target.checked === true
                  ? dispatch(HandleTrue(todo, todo.id))
                  : dispatch(HandleFalse(todo, todo.id))
              }
            />
          </span>
          <span className="todoTxt">{todo.text}</span>
          <span>
            <Link to="./Edit">
              <EditOutlined
                style={{
                  fontSize: 22,
                  color: "rgb(45, 112, 65)",
                  cursor: "pointer",
                  marginRight: 10,
                }}
                onClick={() => dispatch(SetValue(todo.text, todo.id))}
              />
            </Link>
            <DeleteOutlined
              style={{ fontSize: 20, color: "brown", cursor: "pointer" }}
              onClick={() => dispatch(RemoveTodo(todo.id))}
            />
          </span>
        </div>
      ))}
    </div>
  );
};
export default TodosList;
