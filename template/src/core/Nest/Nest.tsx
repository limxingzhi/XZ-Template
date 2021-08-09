import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  Mail as MailIcon,
  Help as HelpIcon,
} from "@material-ui/icons";
import { IGlobalState } from "utils/redux";
import {
  Box,
  Drawer,
  List,
  Typography,
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";

import useStyles from './styles';

interface INestProps {
  /**
   * Child Elements for the Material `Drawer` component.
   * Typically a configured DOM router goes here
   */
  children?: React.ReactNode;
  /** Name of application to set as Title */
  appName: string;
}

/** The main wrapper component for the entire application. */
const Nest: React.FC<INestProps> = ({
  children,
  appName = "CRA Template XZ",
}: INestProps) => {
  const currentPage = useSelector(
    (state: IGlobalState) => state.appconfig.currentPage
  );
  const classes = useStyles();

  const history = useHistory();
  const navigate = (path: string) => () => {
    history.push(path);
  };

  return (
    <div className={classes.root}>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{ paper: classes.drawerPaper }}
      >
        <div className={classes.drawerContainer}>
          <Box className={classes.appBranding} component="div">
            <Typography variant="h6">{appName}</Typography>
          </Box>
          <Divider />
          <List>
            <ListItem
              button
              key={0}
              selected={currentPage === 0}
              onClick={navigate("/")}
            >
              <ListItemIcon>
                <HelpIcon />
              </ListItemIcon>
              <ListItemText primary="READ ME" />
            </ListItem>
            <ListItem
              button
              key={1}
              selected={currentPage === 1}
              onClick={navigate("/hello")}
            >
              <ListItemIcon>
                <MailIcon />
              </ListItemIcon>
              <ListItemText primary="Happiness" />
            </ListItem>
          </List>
        </div>
      </Drawer>
      <main className={classes.content}>{children}</main>
    </div>
  );
};

export default Nest;
