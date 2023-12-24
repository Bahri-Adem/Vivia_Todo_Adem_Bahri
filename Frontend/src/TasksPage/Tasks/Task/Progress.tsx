import { CircularProgress, CircularProgressProps, circularProgressClasses } from "@mui/material";
import { Box } from "@mui/system";
type Props = {
  progressvalue: number;
};
const Progress = (props: CircularProgressProps & Props) => {
  return (
    <Box sx={{ position: "relative" }}>
      <CircularProgress
        variant="determinate"
        sx={{
          color: theme => theme.palette.grey[theme.palette.mode === "light" ? 200 : 800]
        }}
        size={25}
        thickness={3}
        {...props}
        value={100}
      />
      <CircularProgress
        variant="determinate"
        sx={{
          color: "#713fff",
          animationDuration: "550ms",
          position: "absolute",
          left: 0,
          [`& .${circularProgressClasses.circle}`]: {
            strokeLinecap: "round"
          }
        }}
        size={25}
        value={props.progressvalue}
        thickness={3}
        {...props}
      />
    </Box>
  );
};

export default Progress;
