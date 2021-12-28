import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import useScrollTrigger from "@mui/material/useScrollTrigger";

function ElevationScroll(props) {
  const { children, window } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

function Header() {
  return (
    <div>
      <ElevationScroll>
        <AppBar position="fixed">
          <Toolbar>Arc Development</Toolbar>
        </AppBar>
      </ElevationScroll>
    </div>
  );
}

export default Header;
