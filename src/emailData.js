/* eslint-disable import/no-extraneous-dependencies */
import crossFetch from 'cross-fetch';
import { MailSlurp } from 'mailslurp-client';

const mailslurp = new MailSlurp({
  fetch: crossFetch,
  apiKey: process.env.MAILSLURP_API_KEY,
});
const inbox = await mailslurp.getInbox(process.env.MAILSLURP_EMAIL);
console.log(inbox);

const sendEmail = async (name, email, request) => {
  console.log(name);
  const options = {
    to: [inbox.emailAddress],
    subject: `From: ${name}`,
    body: `Email: ${email} Request: ${request}`,
  };
  try {
    const send = await mailslurp.sendEmail(inbox.id, options);
    console.log(send);
  } catch (error) {
    console.log(error);
  }
};

export default sendEmail;
