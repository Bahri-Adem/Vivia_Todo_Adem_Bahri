import { Priority } from "../../../types/commonTypes";
import PriorityButton from "./PriorityButton";

interface Props {
  handlePriorityChange: (selectedPriority: Priority) => void;
  proritySelected: string;
}

const PriorityButtons = ({ handlePriorityChange, proritySelected }: Props) => {
  return (
    <>
      <PriorityButton
        title="High"
        value="High"
        handlePriorityChange={handlePriorityChange}
        selected={proritySelected === "High"}
      />
      <PriorityButton
        title="Medium"
        value="Medium"
        handlePriorityChange={handlePriorityChange}
        selected={proritySelected === "Medium"}
      />
      <PriorityButton
        title="Low"
        value="Low"
        handlePriorityChange={handlePriorityChange}
        selected={proritySelected === "Low"}
      />
    </>
  );
};

export default PriorityButtons;
