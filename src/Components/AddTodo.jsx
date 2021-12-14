import { Input, Button } from "antd";
import { useState } from "react";
import { useDispatch } from "react-redux";

const AddTodo = () => {
  const [InputValue, setInputValue] = useState("");
  const dispatch = useDispatch();

  const add = (e) => {
    if (InputValue !== "")
      dispatch({
        type: "ADD_TODO",
        payload: InputValue,
      });
    setInputValue("");
  };

  const enter = (e) => {
    if (e.keyCode === 13) add();
  };

  return (
    <div className="addTodoBox">
      <Input
        style={{
          marginRight: 10,
          width: 250,
          height: 25,
          paddingLeft: 10,
          borderRadius: 4,
          marginTop: 10,
        }}
        placeholder="todos..."
        value={InputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyUp={(e) => enter(e)}
      />
      <Button onClick={(e) => add(e)} type="primary">
        Add
      </Button>
    </div>
  );
};
export default AddTodo;
