import { Stack } from "@mui/material";
import Header from "./Header/Header";
import Tasks from "./Tasks/Tasks";

const TasksPage = () => {
  return (
    <Stack gap={10} p={5}>
      <Header />
      <Tasks />
    </Stack>
  );
};

export default TasksPage;
