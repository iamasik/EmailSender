const nodemailer = require('nodemailer');

exports.renderIndex = (req, res) => {
  res.render('index');
};

exports.sendEmail = async (req, res) => {
  const { sender, appPassword, receiver, subject, html } = req.body;
  if (!sender || !appPassword || !receiver || !subject || !html) {
    return res.status(400).render('failure', { error: 'Missing required fields.' });
  }
  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: sender,
        pass: appPassword
      }
    });
    await transporter.sendMail({
      from: sender,
      to: receiver,
      subject,
      html
    });
    res.render('success');
  } catch (err) {
    res.render('failure', { error: err.message });
  }
};

// API endpoint for third-party usage
exports.apiSendEmail = async (req, res) => {
  const { sender, appPassword, receiver, subject, html } = req.body;
  if (!sender || !appPassword || !receiver || !subject || !html) {
    return res.status(400).json({ success: false, error: 'Missing required fields.' });
  }
  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: sender,
        pass: appPassword
      }
    });
    await transporter.sendMail({
      from: sender,
      to: receiver,
      subject,
      html
    });
    res.json({ success: true, message: 'Email sent successfully!' });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};
