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
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

export default function ReturnsRefund() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>
            INTERNATIONAL CUSTOMER
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Once your return has been received by our warehouse, we'll email you
            to let you know whether a refund has been issued. If you're
            returning multiple items from an order, or more than one order in
            the same parcel (exculding returns created through My Account),
            please allow up to 24 hours for all items to be processed.
            Individual items may be refunded at different times within this
            period at the warehouse.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>REFUNDS</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            If you're returning from outside of the above mentioned countries
            within 29 and 45 days of receiving your order, you'll receive a gift
            voucher instead of a refund.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>
            RETURNS POLICY & RESPONSIBILITY
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            We get it, sometimes something just doesn't work for you and you
            want your money back. Don't worry, as long as an item is still in
            its original condition, we accept returns, subject to the rules
            below, which includes rules around fair use. None of these rules
            affect your statutory rights. Returned items are your responsibility
            until they reach us, so make sure they're packed up properly and
            can't get damaged on the way! As the parcel remains your
            responsibility until it arrives back with us, ensure that you get
            proof of postage in case you need to contact us about your return.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>EXCHANGE</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            We're not able to offer an exchange on returned items and all
            returned items will be refunded once they've been received by our
            warehouse. If you need a different size or colour of an item, then
            you'll need to place a new order.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>RETURNS SLIP</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            We have returns slips for several countries - if yours isn't listed,
            you'll need to select the 'Rest of World' returns note. If you're
            returning from Europe, you'll need the 'Rest of Europe' returns
            note.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
