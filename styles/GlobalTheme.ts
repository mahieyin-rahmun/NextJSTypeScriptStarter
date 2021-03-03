import { createMuiTheme } from "@material-ui/core";

export const GlobalTheme = createMuiTheme({
  overrides: {
    MuiContainer: {
      root: {
        display: "flex",
        minHeight: "85vh",
        flexDirection: "column",
        marginTop: "2rem",
      },
    },
  },
});
