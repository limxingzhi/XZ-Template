import { lazy } from "react";
import Template from "./_Template/Template";

const Main = lazy(() => import("./Main/Main"));
const Hello = lazy(() => import("./Hello/Hello"));

const MainPage: React.FC = () => 
  <Template index={0} title="Motivation and Architecture Design"><Main /></Template>;

const HelloPage: React.FC = () =>
  <Template index={1} title="Happiness"><Hello /></Template>;

export { MainPage, HelloPage };
