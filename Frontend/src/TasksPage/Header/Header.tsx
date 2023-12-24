import { Stack, Typography } from "@mui/material";
import AddTaskButton from "./AddTaskButton";

const Header = () => {
  return (
    <Stack
      direction="row"
      alignItems={"center"}
      justifyContent={"space-between"}
      sx={{
        width: "100%"
      }}
    >
      <Typography variant="h3" fontWeight={"bold"}>
        Task list
      </Typography>
      <AddTaskButton />
    </Stack>
  );
};

export default Header;
