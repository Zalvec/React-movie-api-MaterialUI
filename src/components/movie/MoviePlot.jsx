import React from "react";
import {
  ExpansionPanel,
  ExpansionPanelSummary,
  Typography,
  ExpansionPanelDetails
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

export default ({ plot }) => (
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
          {plot}
        </Typography>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  </>
);
