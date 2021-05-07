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

export default function OrderIssue() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>DUTIES & TAXES</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Sales tax is calculated on the total of your order, after discount.
            The amount of tax charged to your order depends on your delivery
            address. The tax is calculated based on state rates and the items
            you are purchasing. We'll always show you how much Sales Tax you'll
            be charged when you go to checkout.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>ORDER TRACKING</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <p>
              After placing an order, you will receive an email containing all
              the details. We may also be in touch if we need further
              information to verify your payment. Once your order is confirmed,
              it will be dispatched within 2 business days.
            </p>
            <p>
              Depending on your location and chosen shipping method, delivery
              takes 2-7 business days after it's dispatched. We will keep you
              updated with tracking information and an estimated delivery date.
              You can also follow its journey by heading to ‘My Orders’ in your
              account, or if you opted for guest checkout, you can track the
              status of your order here.
            </p>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}> CANCEL THE ORDER</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            If you've paid for your order using AfterPay, you won't be able to
            cancel your order. However, if you've paid with any other payment
            method, there are varying time limits in which you can cancel your
            order dependent on which delivery option you've chosen: Next Day
            Delivery & Express - 15 minutes after completing your order.
            Nominated Day Delivery- 2 days before your chosen delivery day
            Standard Delivery & all other delivery options - 60 minutes after
            completing your order.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>FAULTY ITEM</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            We’re really sorry if you’ve received a faulty item. Please return
            the item to us as soon as possible so we can get this sorted for
            you. Don’t forget to select ‘Faulty’ when asked for a reason for
            your return. For more information on how to return, click here. If
            you’re not able to create a return, please get in touch with our
            Customer Care team and they will gladly help you further.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
