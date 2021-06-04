import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "70%",
    "@media (max-width:780px)": {
      width: "95%",
    },
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

export default function Delievery() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>
            STILL WAITING FOR ORDER
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Waited until your estimated delivery date? Please allow an extra few
            days for your order to be delivered (especially during busy times) -
            our carriers are always doing their best to get your order to you.
            Make sure you keep an eye on your tracking link for the latest
            updates.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>IMPORT CHARGES</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            We have no control over these charges and we can't tell you what the
            cost would be, as customs policies and import duties vary widely
            from country to country.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
