const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); 
const mailgun = require('mailgun-js');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors());


const mg = mailgun({
  apiKey: '18130cfd4a68782eb76a6a0ce4a81a7a-324e0bb2-00278053',
  domain: 'sandbox193cbe55c7594501b0f85d3fe0df672c.mailgun.org',
});

app.post('/subscribe', (req, res) => {
  const { email } = req.body;


  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  if (!emailRegex.test(email)) {
    return res.status(400).send('Invalid email address');
  }

  const data = {  
    from: 'hema@jaya.com',
    to: email,
    subject: 'Yo! newsletter!',
    text: 'Thank you for subscribing to our Yo! newsletter.',
  };

  mg.messages().send(data, (error, body) => {
    if (error) {
      console.error(error);
      res.status(500).send('Email not sent');
    } else {
      console.log('Email sent:', body);
      res.status(200).send('Subscription successful. Welcome email sent!');
    }
  });
});

const port = 3001;
app.listen(port, () => {
  console.log('Server is running on port 3001');
});