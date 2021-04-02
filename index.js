
var cron = require('node-cron');
require('dotenv').config()
const sgMail = require('@sendgrid/mail')
console.log(process.env.SENDGRID_API_KEY)
sgMail.setApiKey(process.env.SENDGRID_API_KEY)
const msg = {
  to: 'shawrupesh020@gmail.com', // Change to your recipient
  from: 'shawrupesh020@gmail.com', // Change to your verified sender
  subject: 'Email from Node App',
  text: 'Hello ,How r you doing'
 
}


    cron.schedule(' */30 * * * *', () => {
      console.log('Scheduling Email after 30 min');
      sgMail
    .send(msg)
    .then((response) => {
      console.log('Email sent')
    
    })
    .catch((error) => {
      console.error(error)
    })

    });