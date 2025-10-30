const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const path = require('path');
const emailController = require('./controllers/emailController');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));
const upload = multer({ dest: 'uploads/' });

app.get('/', emailController.renderIndex);
app.post('/send', emailController.sendEmail);
app.post('/api/send', emailController.apiSendEmail);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
