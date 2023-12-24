import { Box, Stack, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import PropertyTitle from "./PropertyTitle";
import Status from "./Status";
import { useState } from "react";
import Progress from "./Progress";
import EditTaskModal from "../../Header/Modal/EditTaskModal";
import DeleteTaskModal from "../../Header/Modal/DeleteTaskModal";

type Props = {
  taskName: string;
  priority: "High" | "Medium" | "Low";
  id: number;
};
const Task = (props: Props) => {
  const [progress, setProgress] = useState(0);
  const [open, setOpen] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const handleClose = () => {
    setOpen(false);
    setOpenDelete(false);
  };
  const priorityColors = {
    High: "#f73446",
    Medium: "#ffbd21",
    Low: "#0ac947"
  };

  return (
    <Box bgcolor={"white"} sx={{ width: "100%" }} borderRadius={4} p={3}>
      <Stack
        direction={{ sm: "column", md: "row" }}
        width={"100%"}
        spacing={{ xs: 2 }}
        alignItems={{ sm: "flex-start", md: "center" }}
        justifyContent={"space-between"}
      >
        <Stack width={100}>
          <PropertyTitle title="Task" />
          <Typography>{props.taskName}</Typography>
        </Stack>
        <Stack width={100}>
          <PropertyTitle title="Priority" />
          <Typography fontWeight={"bold"} color={priorityColors[props.priority]}>
            {props.priority}
          </Typography>
        </Stack>
        <Box
          onClick={() => {
            if (progress === 100) {
              setProgress(0);
            } else {
              setProgress(prev => prev + 50);
            }
          }}
        >
          <Status progress={progress} />
        </Box>
        <Stack alignItems={{ md: "center" }} justifyContent={"center"}>
          <Progress progressvalue={progress} />
        </Stack>
        <Stack
          width={100}
          gap={1}
          justifyContent={{ sm: "flex-start", md: "flex-end" }}
          direction={"row"}
        >
          <BorderColorIcon
            onClick={() => {
              setOpen(true);
            }}
            sx={{ cursor: "pointer" }}
          />
          <EditTaskModal
            open={open}
            setOpen={setOpen}
            handleClose={handleClose}
            taskName={props.taskName}
            taskPriority={props.priority}
            taskId={props.id}
          />
          <DeleteIcon
            style={{
              color: "red"
            }}
            onClick={() => {
              setOpenDelete(true);
            }}
            sx={{ cursor: "pointer" }}
          />
          <DeleteTaskModal
            open={openDelete}
            setOpen={setOpenDelete}
            handleClose={handleClose}
            taskId={props.id}
          />
        </Stack>
      </Stack>
    </Box>
  );
};

export default Task;
