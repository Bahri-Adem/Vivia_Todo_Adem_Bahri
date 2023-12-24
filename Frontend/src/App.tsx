import { Box } from "@mui/material";
import "./App.css";
import TasksPage from "./TasksPage/TasksPage";

function App() {
  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100%"
      }}
    >
      <TasksPage />
    </Box>
  );
}

export default App;
