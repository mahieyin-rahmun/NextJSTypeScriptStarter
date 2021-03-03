import { Grid, Typography } from "@material-ui/core";
import React from "react";
import useStyles from "../styles/Header";

function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid
        container
        justify="space-between"
        alignItems="center"
        direction="row"
      >
        <Grid item>
          <Typography variant="h5">NextJS + Typescript</Typography>
        </Grid>
        <Grid item>
          <Typography variant="h5">
            An Opinionated NextJS Starter Template
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}

export default Header;
