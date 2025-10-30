const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const path = require('path');
const emailController = require('../controllers/emailController');

const app = express();
const router = express.Router();

router.get('/', emailController.renderIndex);
router.post('/send', emailController.sendEmail);
router.post('/api/send', emailController.apiSendEmail);

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../views'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../public')));

app.use('/.netlify/functions/api', router);

module.exports = app;
