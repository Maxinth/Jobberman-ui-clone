import React from "react";
import FlagIcon from "@material-ui/icons/Flag";
import PaymentIcon from "@material-ui/icons/Payment";
import CheckCircleRoundedIcon from "@material-ui/icons/CheckCircleRounded";
import DateRangeIcon from "@material-ui/icons/DateRange";

export const data = [
  {
    icon: <FlagIcon />,
    title: "Step 1",
    howTo: `Select the package you want. You will then need to tell us a little bit more about yourself. Click 'Submit' when you are done. `,
  },
  {
    icon: <PaymentIcon />,
    title: "Step 2",
    howTo: `You can choose to pay via bank transfer or online `,
  },

  {
    icon: <CheckCircleRoundedIcon />,
    title: "Step 3",
    howTo: `Once your payment is confirmed, We will begin working on your order. `,
  },
  {
    icon: <DateRangeIcon />,
    title: "Step 4",
    howTo: `We will send you the first draft of your order within the stipulated time frame. `,
  },
];
