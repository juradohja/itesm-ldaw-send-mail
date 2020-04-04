const nodemailer = require('nodemailer');
const mailconfig = require('../configs/mail');

exports.sendMail = (req, res) => {
  let transporter = nodemailer.createTransport({
    host: mailconfig.host,
    port: mailconfig.port,
    secure: mailconfig.secure === 'true',
    auth: {
      user: mailconfig.username,
      pass: mailconfig.password
    }
  });

  transporter.sendMail({
    from: `${mailconfig.from.name} <${mailconfig.from.email}>`,
    to: 'bill@microsoft.com',
    subject: 'Hola mundo',
    text: 'Mi nombre es Beto.',
    html: `<p>Mi nombre es Beto.</p>`
  })
  .then((data) => {
    res.json({message : 'Mensaje enviado'});
  })
  .catch((error) => {
    res.json({message : 'Mensaje no enviado', error : error});
  })
}
