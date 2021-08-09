import { Typography, Card, CardContent, Grid } from "@material-ui/core";

/** 
 * Material Cards describing the Architecture of
 * howthe Page, Widget and Core Components work
 * with each other
 */
const ArchitectureCard: React.FC = () => (
  <>
    <Grid container spacing={2}>
      <Grid item md={6} lg={4}>
        <Card>
          <CardContent>
            <Typography gutterBottom variant="h6">
              Page Components
            </Typography>
            <Typography paragraph>
              In principle, Page Components operate like traditional HTML pages.
              They store some content, you place widgets inside them and the URL
              will reflect which page you see.
              <br />
              <br />
              To avoid Prop Passing Hell or require all components to depend on
              the global store, you use Page Components as an abstration between
              the global store and the local state. You should data fetch and
              manage the global store states in the pages before passing down
              the data down to the Widgets as Props. This allows the Widgets to
              be reusable and easy to consume. Routes specific functionality
              such as interacting with SessionStorage or logging or analytics
              should be handled here in Page Components too.
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item md={6} lg={4}>
        <Card>
          <CardContent>
            <Typography gutterBottom variant="h6">
              Widget Components
            </Typography>
            <Typography paragraph>
              The Widget Components act more or less as traditional react
              components. By splitting Pages and Widgets into 2 distinct and
              logical abstractions, you can split their responsiblities. You can
              test your Widgets easily without the need to hydrate a global
              state or do data-fetching since that is the responsibility of the
              Page. You can also normalize the fetched / global state data at
              the Page level and let it cascade down the VDOM tree rather than
              doing it at every single component.
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item md={6} lg={4}>
        <Card>
          <CardContent>
            <Typography gutterBottom variant="h6">
              Core Components
            </Typography>
            <Typography paragraph>
              Core Components are React Components that are essential to the
              application. They can range data providers for Redux Store or
              Media Queries. Routing, App Drawers, localization, theming all
              falls under this category of components too.
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  </>
);

export default ArchitectureCard;
