import { VERIFICATION_EMAIL_TEMPLATE } from "./mailtrap/templates";

const { MailtrapClient } = require("mailtrap");

const TOKEN = "cdf9df5a64ecf01526e387fdd1ff688a";

const client = new MailtrapClient({
  token: TOKEN,
});

const sender = {
  email: "mailtrap@demomailtrap.com",
  name: "Alfred Malope",
};
const recipients = [
  {
    email: "malopealfred12@gmail.com",
  }
];

client
  .send({
    from: sender,
    to: recipients,
    subject: "Verify your email",
    html: VERIFICATION_EMAIL_TEMPLATE.replace("{verificationCode}", "zVcmdjfvhfdj"),
    // text: "Congrats for sending test email with Mailtrap!",
    category: "Email Verification",
  })
  .then(console.log, console.error);