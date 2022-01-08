import AddTodo from "./AddTodo";
import TodosList from "./TodosList";
import { Row, Col } from "antd";
import { useSelector } from "react-redux";

const Content = () => {
  const todos = useSelector((state) => state.addTodoReducer);
  const doneTasks = todos.filter((todo) => todo.compeleted === true).length;
  const leftTasks = todos.filter((todo) => todo.compeleted !== true).length;
  return (
    <Row className="contentBox">
      <Col className="panel" md={{ span: 2 }} xs={{ span: 24 }}>
        {todos.length === 0 ? (
          ""
        ) : (
          <ul className="ul">
            <Col xs={{ offset: 8, span: 8 }}>
              <li>
                <span className="ulTitle">Tasks</span>
                <span className="ulInfo">{todos.length}</span>
              </li>
            </Col>
            <Col xs={{ offset: 8, span: 8 }}>
              <li>
                <span className="ulTitle">Done</span>
                <span className="ulInfo">{doneTasks}</span>
              </li>
            </Col>
            <Col xs={{ offset: 8, span: 8 }}>
              <li>
                <span className="ulTitle">Left</span>
                <span className="ulInfo">{leftTasks}</span>
              </li>
            </Col>
          </ul>
        )}
      </Col>
      <Col className="content" md={{ span: 22 }} xs={{ span: 24 }}>
        <AddTodo />
        <TodosList />
      </Col>
    </Row>
  );
};
export default Content;
