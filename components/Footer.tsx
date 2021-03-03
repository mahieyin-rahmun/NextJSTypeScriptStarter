import { Box, Typography } from "@material-ui/core";
import React from "react";
import useStyles from "../styles/Footer";

function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        <Typography variant="caption">Free for use by everyone</Typography>
        <Typography variant="caption">
          Starter Template Author: Mahieyin Rahmun
        </Typography>
      </Box>
    </div>
  );
}

export default Footer;
