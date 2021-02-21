const data = {
  // fraudExamples array data
  fraudExamples: [
    ` Scam artists wanting to throw you off your game will prey on your anxiety by provoking you, a job seeker with a false sense of urgency by saying things like, you have to act now or time is running out.`,
    ` Scam artists will typically require things like certification fees, background-check fees, or set-up fees. This is a big red flag.`,
    ` Never give out your personal information over the phone to a stranger. Often, scam artists will ask for credit/debit cards and bank account details and once they have this information, you will likely not hear back from them. Do not accept a money transfer where you can retain a portion as payment or money or cheques deposited into your accounts.`,
    ` Always confirm the name of the company that has invited you for an Interview. Confirm that the venue of the interview indicated is the same as the hiring companys or recruiting agencys official address.`,
  ],

  // tips array data
  tips: [
    `Do NOT respond to the advert or email`,
    `Report it to Jobberman immediately, providing a link to the ad or a copy of the email.`,
    `Make sure you have up-to-date anti-virus software to protect your computer.`,
    `If you have supplied your bank account or credit card details, please contact your financial institution immediately and ask for their advice.`,
    ` Be alert for suspicious emails asking for personal details.`,
    ` Be sure to always provide a link to the fraudulent job advert or a copy of the email.`,
  ],

  // texts object data
  texts: {
    boldText: `Jobberman.com endeavours to ensure that all job adverts on our site are
        for legitimate job opportunities and will remove any advert identified
        to have contravened the Jobberman Terms and Conditions.`,
    normalText: ` What to do if you suspect a job advert or email to be fraudulent?`,
    longerText: `The proliferation of scams on the internet commonly leads us to view
        scam job adverts and fraudulent activities as genuine. There are scam
        artist out there making millions off of fake job postings, and
        pay-to-play schemes designed to cheat unsuspecting people. It is
        important that you protect yourself against job scams and other
        fraudulent activities during the course of your job search.`,
  },
};

// obtaining the data as needed in different sections
const { fraudExamples, tips, texts } = data;
const { boldText, normalText, longerText } = texts;
export { fraudExamples, tips, boldText, normalText, longerText };
