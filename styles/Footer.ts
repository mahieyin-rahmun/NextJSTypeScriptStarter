import { createStyles, makeStyles, Theme } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: "#000",
      color: "#fff",
      padding: theme.spacing(2, 5, 2, 5),
      borderRadius: "25px",
    },
  }),
);

export default useStyles;
