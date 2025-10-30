const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const path = require('path');
const cors = require('cors');
const emailController = require('./controllers/emailController');

const app = express();
const router = express.Router();

router.get('/', emailController.renderIndex);
router.post('/send', emailController.sendEmail);
router.post('/api/send', emailController.apiSendEmail);

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(cors()); // Enable CORS for all routes
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use(router);

// This will run the server locally when you run `npm run dev`
if (require.main === module) {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
  });
}

module.exports = app;
