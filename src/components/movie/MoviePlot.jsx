import React from "react";
import {
  ExpansionPanel,
  ExpansionPanelSummary,
  Typography,
  ExpansionPanelDetails
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

export default ({ plot, type }) => (
  <>
    <ExpansionPanel style={{ margin: "1em 0" }}>
      <ExpansionPanelSummary
        style={{ background: "#566ddd" }}
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography variant="h6">Plot</Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <Typography variant="subtitle1" align="justify">
          {plot !== "N/A" && plot}
          {plot === "N/A" && `The plot of this ${type} is a mystery..`}
        </Typography>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  </>
);
