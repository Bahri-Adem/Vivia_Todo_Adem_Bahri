import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { changePriority } from "../../../store/TasksSlice";
import { RootState } from "../../../store/store";
import { Priority } from "../../../types/commonTypes";
import { useEffect } from "react";

type Props = {
  title: Priority;
  value: Priority;
  handlePriorityChange: (selectedPriority: Priority) => void;
  selected: boolean;
};

const PriorityButton = (props: Props) => {
  const dispatch = useDispatch();
  const currentPriority = useSelector((state: RootState) => state.tasks.priority);
  const priorityColors = {
    High: "#f73446",
    Medium: "#ffbd21",
    Low: "#0ac947"
  };
  useEffect(() => {
    return () => {
      if (props.selected) {
        dispatch(changePriority(props.value));
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Button
      sx={{
        paddingX: "25px",
        border: `1px solid ${priorityColors[props.value]}`,
        backgroundColor: currentPriority === props.value ? priorityColors[props.value] : "white",
        color: currentPriority === props.value ? "white" : priorityColors[props.value],
        borderRadius: "10px",
        "&:hover": {
          border: `1px solid ${priorityColors[props.value]}`,
          backgroundColor: currentPriority === props.value ? priorityColors[props.value] : "white",
          color: currentPriority === props.value ? "white" : priorityColors[props.value]
        }
      }}
      onClick={() => {
        props.handlePriorityChange(props.value);
        dispatch(changePriority(props.value));
      }}
    >
      {props.title}
    </Button>
  );
};

export default PriorityButton;
