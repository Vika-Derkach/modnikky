import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import React from "react";

const options_color = ["Option 1", "Option 2"];
const options_size = [" 1", " 2"];

export default function Selector() {
  const [value_color, setValueColor] = React.useState(options_color[0]);
  const [inputValueColor, setInputValueColor] = React.useState("");

  const [value_size, setValueSize] = React.useState(options_size[0]);
  const [inputValueSize, setInputValueSize] = React.useState("");

  return (
    <div>
      <div>
        {/* <div>{`value: ${value !== null ? `'${value}'` : 'null'}`}</div>
      <div>{`inputValue: '${inputValue}'`}</div>
      <br /> */}
        <Autocomplete
          value={value_color}
          onChange={(event, newValue) => {
            setValueColor(newValue);
          }}
          inputValue={inputValueColor}
          onInputChange={(event, newInputValue) => {
            setInputValueColor(newInputValue);
          }}
          id="controllable-states-demo"
          options={options_color}
          style={{ width: 200, height: 5 }}
          renderInput={(params) => (
            <TextField {...params} label="COLOR" variant="outlined" />
          )}
        />
      </div>{" "}
      <div>
        <Autocomplete
          value={value_size}
          onChange={(event, newValue) => {
            setValueSize(newValue);
          }}
          inputValue={inputValueSize}
          onInputChange={(event, newInputValue) => {
            setInputValueSize(newInputValue);
          }}
          id="controllable-states-demo"
          options={options_size}
          style={{ width: 300 }}
          renderInput={(params) => (
            <TextField {...params} label="Controllable" variant="outlined" />
          )}
        />
      </div>
    </div>
  );
}
