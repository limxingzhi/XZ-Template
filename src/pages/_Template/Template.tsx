import { Suspense } from "react";
import { Typography, Box } from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";
import { useNavigation } from 'utils/hooks';
import useStyles from './styles';

interface ITemplateProps {
  children: JSX.Element;
  title: string;
  index: number;
}

const Loader: React.FC = () => (
  <>
    <Skeleton height="4em" width="16em" />
    <Skeleton variant="rect" height="20em" />
  </>
);

/**
 * Page Wrapper that updates the redux state and
 * tab title whenever the current page changes
 */
const Template: React.FC<ITemplateProps> = ({
  children,
  title,
  index,
}: ITemplateProps) => {
  const classes = useStyles();
  const navigator = useNavigation();

  navigator({key: index, title: title});

  return (
    <>
      <Typography variant="h5">{title}</Typography>
      <Suspense fallback={<Loader />}>
        <Box className={classes.containerWrapper}>{children}</Box>
      </Suspense>
    </>
  );
};

export default Template;
