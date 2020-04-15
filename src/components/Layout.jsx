import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Menu from "./Menu";
import Footer from "./Footer";

import { Box, Container } from "@material-ui/core";

export default props => {
  return (
    <>
      <Router>
        <Box className="App">
          <Menu />
          <Container maxWidth="lg" style={{ width: "80%", margin: "5em auto" }}>
            {props.children}
          </Container>
          <Footer />
        </Box>
      </Router>
    </>
  );
};
