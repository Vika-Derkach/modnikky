import Grid from "@material-ui/core/Grid";
import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import React from "react";

export default function SizeSelector() {
  const [alignment, setAlignment] = React.useState("left");

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
    <Grid container spacing={2} direction="column" alignItems="left">
      <Grid item>
        <ToggleButtonGroup
          size="medium"
          value={alignment}
          exclusive
          onChange={handleChange}
        >
          <ToggleButton value="left"> S</ToggleButton>
          <ToggleButton value="center">M</ToggleButton>
          <ToggleButton value="right">L</ToggleButton>
          <ToggleButton value="justify">XL</ToggleButton>
        </ToggleButtonGroup>
      </Grid>
    </Grid>
  );
}
