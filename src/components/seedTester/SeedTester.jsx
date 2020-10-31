import React, { useState, useEffect } from "react";
import "./index.scss";
import {
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
  Button
} from "@material-ui/core";

const SeedTester = () => {
  const [dost, setDost] = useState("");
  const [pof, setPOF] = useState("");
  const [SC, setSC] = useState("");
  const [TN, setTN] = useState("");
  const [sq, setsq] = useState("");
  const [sourcec, setsourceclass] = useState("");
  const [dc, setdc] = useState("");

  const handlesubmit = () =>{
    
  }

  return (
    <div className="homepage">
      <h2>Seed Testing Agency</h2>
      <div className="formElements">
        <FormControl style={{ marginRight: "25px" }}>
          <InputLabel>Date</InputLabel>
          <Input
            onChange={(e) => {
              setDost(e.target.value);
            }}
            aria-describedby="my-helper-text"
          />
          <FormHelperText id="my-helper-text">
            Date of Samaple test:
          </FormHelperText>
        </FormControl>

        <FormControl style={{ marginRight: "25px" }}>
          <InputLabel>Pass or Fail</InputLabel>
          <Input
            onChange={(e) => {
              setPOF(e.target.value);
            }}
            aria-describedby="my-helper-text"
          />
          <FormHelperText id="my-helper-text">
            Whether sample test passed or failed
          </FormHelperText>
        </FormControl>
      </div>

      <div className="formElements">
        <FormControl style={{ marginRight: "25px" }}>
          <InputLabel>Tag no</InputLabel>
          <Input
            onChange={(e) => {
              setTN(e.target.value);
            }}
            aria-describedby="my-helper-text"
          />
          <FormHelperText id="my-helper-text">Source Tag Number</FormHelperText>
        </FormControl>
        <FormControl>
          <InputLabel>Source Quantity</InputLabel>
          <Input
            onChange={(e) => {
              setsq(e.target.value);
            }}
            aria-describedby="my-helper-text"
          />
          <FormHelperText id="my-helper-text">
            Quantity of the source
          </FormHelperText>
        </FormControl>
      </div>
      <div className="formElements">
        <FormControl style={{ marginRight: "25px" }}>
          <InputLabel>Source Class</InputLabel>
          <Input
            onChange={(e) => {
              setsourceclass(e.target.value);
            }}
            aria-describedby="my-helper-text"
          />
          <FormHelperText id="my-helper-text">Source Class</FormHelperText>
        </FormControl>
        <FormControl style={{ marginRight: "25px" }}>
          <InputLabel>Destination Class</InputLabel>
          <Input
            onChange={(e) => {
              setdc(e.target.value);
            }}
            aria-describedby="my-helper-text"
          />
          <FormHelperText id="my-helper-text">Destination Class</FormHelperText>
        </FormControl>
        <FormControl>
          <InputLabel>Secret code</InputLabel>
          <Input
            onChange={(e) => {
              setSC(e.target.value);
            }}
            aria-describedby="my-helper-text"
          />
          <FormHelperText id="my-helper-text">
            Sample Secret Code
          </FormHelperText>
        </FormControl>
      </div>
      <Button
        onClick={() => handlesubmit()}
        variant="contained"
        color="secondary"
      >
        SUBMIT
      </Button>
    </div>
  );
};

export default SeedTester;
