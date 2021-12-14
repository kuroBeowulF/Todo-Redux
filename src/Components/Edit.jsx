import { Button, Input, Checkbox } from "antd";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const Edit = () => {
  const target = useSelector((state) => state.passValueReducer);
  console.log(target);
  const [Evalue, setEvalue] = useState(target.text);
  const [checkValue, setCheckvalue] = useState();
  const dispatch = useDispatch();
  return (
    <div className="editBox">
      <div className="editContentBox">
        <Input
          className="editinp"
          value={Evalue}
          onChange={(e) => setEvalue(e.target.value)}
        />
        <div className="editCheckbox">
          <span>Did you do this task?!</span>
          <Checkbox
            style={{ marginLeft: 20 }}
            onChange={(e) => setCheckvalue(e.target.checked)}
          />
        </div>
        <Link to="/">
          <Button
            type="primary"
            className="editBTN"
            onClick={() =>
              dispatch({
                type: "RECOVER_STATE",
                payload: { boolean: checkValue, id: target.id, text: Evalue },
              })
            }
          >
            save
          </Button>
        </Link>
      </div>
    </div>
  );
};
export default Edit;
