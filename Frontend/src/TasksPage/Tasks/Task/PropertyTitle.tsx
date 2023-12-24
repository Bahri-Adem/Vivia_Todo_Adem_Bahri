import { Typography } from "@mui/material";

type Props = { title: string };

const PropertyTitle = (props: Props) => {
  return <Typography color={"#7d8592"}>{props.title}</Typography>;
};

export default PropertyTitle;
