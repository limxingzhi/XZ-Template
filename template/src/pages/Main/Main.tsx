import { Typography } from "@material-ui/core";
import { MotivationCard, ArchitectureCard } from "widgets";

/** The first demo page containing some reading materials */
const Main: React.FC = () => (
  <>
    <Typography gutterBottom variant="h3">
      Motivation
    </Typography>
    <MotivationCard />
    <br />
    <br />
    <Typography gutterBottom variant="h3">
      Architecture
    </Typography>
    <ArchitectureCard />
  </>
);

export default Main;
