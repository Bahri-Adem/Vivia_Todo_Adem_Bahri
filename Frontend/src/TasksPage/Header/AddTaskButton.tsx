import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import Modal from "./Modal/AddTaskModal";
const AddTaskButton = () => {
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <Button
        sx={{
          borderRadius: "10px",
          background: "#713fff",
          "&:hover": {
            background: "#713fff"
          }
        }}
        size="large"
        variant="contained"
        startIcon={<AddIcon />}
        onClick={() => {
          setOpen(true);
        }}
      >
        Add Task
      </Button>
      <Modal open={open} setOpen={setOpen} handleClose={handleClose} />
    </div>
  );
};

export default AddTaskButton;
