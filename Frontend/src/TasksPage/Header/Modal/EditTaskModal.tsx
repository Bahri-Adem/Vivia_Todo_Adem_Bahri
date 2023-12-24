import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Stack,
  TextField,
  Typography
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import PriorityButtons from "../PriorityButtons/PriorityButtons";
import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { refreshData } from "../../../store/TasksSlice";
type Props = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  handleClose: () => void;
  taskName: string;
  taskPriority: "High" | "Medium" | "Low";
  taskId: number;
};
const EditTaskModal = (props: Props) => {
  const [taskName, setTaskName] = useState(props.taskName);
  const [taskPriority, setTaskPriority] = useState(props.taskPriority);
  const dispatch = useDispatch();
  const handlePriorityChange = (selectedPriority: "High" | "Medium" | "Low") => {
    setTaskPriority(selectedPriority);
  };
  const handleSubmit = async () => {
    try {
      const response = await axios.put(`http://localhost:5000/api/tasks/${props.taskId}`, {
        task: taskName,
        progress: taskPriority
      });
      console.log("Task updated successfully:", response.data);
      setTaskName("");
      setTaskPriority("Low");
      dispatch(refreshData(true));
      props.handleClose();
    } catch (error) {
      console.error("Error updating task:", error);
    }
  };
  useEffect(() => {
    return () => {
      dispatch(refreshData(false));
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Dialog
      sx={{ padding: "10px", borderRadius: "10px" }}
      fullWidth={true}
      open={props.open}
      onClose={props.handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <DialogTitle>
        <Stack direction={"row"} justifyContent={"space-between"}>
          <Typography variant="h5" fontWeight={"bold"}>
            Edit Task
          </Typography>
          <CloseIcon onClick={props.handleClose} sx={{ cursor: "pointer" }} />
        </Stack>
      </DialogTitle>
      <DialogContent>
        <Typography color="#7d8592" fontWeight={"bold"} padding={"10px"}>
          Task
        </Typography>
        <TextField
          sx={{ padding: "10px", borderRadius: "40px" }}
          fullWidth={true}
          onChange={e => {
            setTaskName(e.target.value);
          }}
          value={taskName}
          placeholder="Type your task here..."
        />
        <Typography color="#7d8592" fontWeight={"bold"} padding={"10px"}>
          Priority
        </Typography>
        <Stack direction="row" gap={1} padding={"10px"}>
          <PriorityButtons
            handlePriorityChange={handlePriorityChange}
            proritySelected={taskPriority}
          />
        </Stack>
      </DialogContent>
      <DialogActions>
        <Button
          sx={{
            backgroundColor: "#713fff",
            borderRadius: "10px",
            paddingX: "20px",
            margin: "30px",
            "&:hover": {
              background: "#713fff"
            }
          }}
          variant="contained"
          disabled={taskName.trim() === ""}
          onClick={handleSubmit}
        >
          Edit
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default EditTaskModal;
