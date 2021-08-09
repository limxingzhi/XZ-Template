import { Typography, Card, CardContent, Grid } from "@material-ui/core";

/** Material Card describing the motivation of this template */
const MotivationCard: React.FC = () => (
  <Grid container spacing={2} direction="row" alignItems="center">
    <Grid item md={6} lg={6}>
      <Card>
        <CardContent>
          <Typography gutterBottom variant="h6">
            Design
          </Typography>
          <Typography paragraph>
            This app skeleton design was loosely based around another design I
            made for a school project. It originates from the idea where it has
            to be incredibly easy to add in new functionality. If I were to pick
            a targeted audience for this, I will say its for students trying to
            quickly kick start a react project without having to set up a ton of
            boilerplate code like a navigation bar, routing, TypeScript support,
            determining how the app strucutre start should look like, all that
            boring stuff.
            <br />
            <br />
            State management is also pre-configured with redux toolkit.
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  </Grid>
);

export default MotivationCard;
