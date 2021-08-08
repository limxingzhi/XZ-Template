import { lazy } from "react";
import MotivationCard from "./Motivation/MotivationCard";

const ArchitectureCard = lazy(
  () => import("./Architecture/ArchitectureCard")
);

export { MotivationCard, ArchitectureCard };
