import React from "react";
import { AppBar, Typography } from "@material-ui/core";
import CopyrightIcon from "@material-ui/icons/Copyright";

export default props => (
  <AppBar position="fixed" className="footer">
    <Typography>
      Made by Zalvec
      <CopyrightIcon fontSize="small" />
    </Typography>
    <Typography> An Material-UI assignment </Typography>
  </AppBar>
);
