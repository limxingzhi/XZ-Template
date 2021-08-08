
import { makeStyles } from "@material-ui/core/styles";

const drawerWidth = 240;
export default makeStyles((theme) => ({
  // copy pasted from their documentation page
  root: {
    display: "flex",
  },
  appBranding: {
    display: "flex",
    justifyContent: "center",
    padding: "1em",
    userSelect: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: "auto",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  kawaiiWrapper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    marginTop: "32px",
  },
}));
