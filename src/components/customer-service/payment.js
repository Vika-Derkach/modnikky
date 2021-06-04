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

export default function Payment() {
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
            WHICH CURRENCIES CAN I SHOP IN?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            You can pay using various currencies depending on the country you're
            shopping from.
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
            WHEN WILL MY CARD BE CHARGED?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            When you come to pay for your order, you'll be charged in the
            currency you have selected. If your payment card is registered with
            a different currency to the one you're purchasing in, then your bank
            will convert the price using their exchange rate.
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
            WHICH PAYMENT METHODS DO YOU ACCEPT?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            PayPal. It's safer: shop at thousands of websites without sharing
            your financial details. It's faster: with no need to type in your
            card details, you can check out in a few clicks. It's easier: all
            you need is an email address and password to pay online.
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
            WILL MY PERSONAL DETAILS STAY SAFE?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>We won't share your financial details.</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>
            MORE INFORMATION ABOUT PRODUCTS
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            There's also a link to our size guide on each product page next to
            the ‘select size' box so you can find out the specific measurements
            for each size.
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
            HOW TO ORDER & PAY
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            We also take fraud very seriously too, so all credit and debit card
            holders are subject to validation and authorisation by both us and
            the card issuer. To better protect our customers when making online
            payments by card you may be presented with 3D secure security
            measures when paying. This is dependent on your bank issuer and may
            require you to enter a password or get a security code via email or
            phone.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
