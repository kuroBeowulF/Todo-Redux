import { useSelector } from "react-redux";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { Checkbox } from "antd";
import { Link } from "react-router-dom";

const TodosList = () => {
  const todos = useSelector((state) => state.addTodoReducer);
  const dispatch = useDispatch();
  return (
    <div className="todosList">
      {todos.map((todo) => (
        <div className="todo" key={todo.id}>
          <span>
            <span style={{ marginRight: 10 }}>
              <Checkbox
                checked={todo.compeleted}
                onChange={(e) =>
                  e.target.checked === true
                    ? dispatch({
                        type: "HANDEL_TRUE",
                        payload: { id: todo.id, item: todo },
                      })
                    : dispatch({
                        type: "HANDEL_FALSE",
                        payload: { id: todo.id, item: todo },
                      })
                }
              />
            </span>
            {todo.text}
          </span>
          <span>
            <Link to="./Edit">
              <EditOutlined
                style={{
                  fontSize: 22,
                  color: "rgb(45, 112, 65)",
                  cursor: "pointer",
                  marginRight: 10,
                }}
                onClick={() =>
                  dispatch({
                    type: "SET_VALUE",
                    payload: { text: todo.text, id: todo.id },
                  })
                }
              />
            </Link>
            <DeleteOutlined
              style={{ fontSize: 20, color: "brown", cursor: "pointer" }}
              onClick={() => dispatch({ type: "REMOVE", id: todo.id })}
            />
          </span>
        </div>
      ))}
    </div>
  );
};
export default TodosList;
