const dotenv = require('dotenv');

dotenv.config();

const mailConfig = {
  host : process.env.MAIL_HOST || 'debugmail.io',
  port : process.env.MAIL_PORT || 25,
  username : process.env.MAIL_USERNAME || null,
  password : process.env.MAIL_PASSWORD || null,
  secure : process.env.MAIL_SECURE || false,
  from: {
    name : process.env.MAIL_FROM_NAME || 'test',
    email : process.env.MAIL_FROM_EMAIL || 'test@test.com',
  }
}

module.exports = mailConfig
