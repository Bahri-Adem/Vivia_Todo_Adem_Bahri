import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  Typography
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import axios from "axios";
import { useDispatch } from "react-redux";
import { refreshData } from "../../../store/TasksSlice";
import { useEffect } from "react";

type Props = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  handleClose: () => void;
  taskId: number;
};

const useStyles = makeStyles({
  content: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center"
  },
  actions: {
    justifyContent: "center",
    gap: "10px"
  },
  deleteButton: {
    color: "#fff",
    borderRadius: "10px",
    backgroundColor: "#713fff",
    "&:hover": {
      backgroundColor: "#713fff"
    }
  },
  closeButton: {
    color: "#7d8592",
    backgroundColor: "#fff",
    borderRadius: "10px",
    border: "1px solid #D3D3D3",
    "&:hover": {
      backgroundColor: "#fff"
    }
  }
});

const DeleteTaskModal = (props: Props) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:5000/api/tasks/${props.taskId}`);
      console.log(`Task ${props.taskId} deleted successfully`);
      dispatch(refreshData(true));
    } catch (error) {
      console.error("Error deleting task:", error);
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
      sx={{
        "& .MuiDialog-paper": {
          padding: "40px",
          borderRadius: "30px"
        }
      }}
      fullWidth={true}
      open={props.open}
      onClose={props.handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <DialogContent className={classes.content}>
        <DialogContentText id="alert-dialog-description">
          <Typography variant="h5" color={"black"}>
            Are you sure you want to delete this task?
          </Typography>
        </DialogContentText>
      </DialogContent>
      <DialogActions className={classes.actions}>
        <Button onClick={handleDelete} className={classes.deleteButton}>
          Delete
        </Button>
        <Button onClick={props.handleClose} className={classes.closeButton}>
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DeleteTaskModal;
