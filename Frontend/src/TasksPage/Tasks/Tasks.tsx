import { Stack } from "@mui/material";
import Task from "./Task/Task";
import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

interface TaskItem {
  task: string;
  progress: "High" | "Medium" | "Low";
  id: number;
}

const Tasks = () => {
  const [tasks, setTasks] = useState<TaskItem[]>([]);
  const refreshData = useSelector((state: RootState) => state.tasks.refresh);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/tasks/allTasks")
      .then(res => {
        setTasks(res.data); // No need to use 'prevTasks' here
        console.log(res.data);
      })
      .catch(err => console.log(err));
  }, [refreshData]);
  return (
    <Stack
      sx={{
        width: "100%",
        hieght: "100%"
      }}
      gap={1}
    >
      {tasks.map(task => (
        <Task key={task.id} priority={task.progress} taskName={task.task} id={task.id} />
      ))}
    </Stack>
  );
};

export default Tasks;
