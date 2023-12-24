import { Box, Typography } from "@mui/material";
type Props = {
  progress: number;
};
const Status = (props: Props) => {
  const progress = {
    0: "To Do",
    50: "In Progress",
    100: "Done"
  };
  return (
    <Box
      sx={{
        background: "hsla(217,9%,53%,.14)",
        cursor: "pointer"
      }}
      borderRadius={2}
      maxWidth={100}
      p={1}
      color={"#7d8592"}
    >
      <Typography variant="subtitle2">{progress[props.progress as 0 | 50 | 100]}</Typography>
    </Box>
  );
};

export default Status;
