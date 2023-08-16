require('dotenv').config();
const path = require('path');
const express = require('express');
const controllers = require('./controllers');

const app = express();

// Serve static files from the React app
app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(express.json());

app.get('/styles', (req, res) => {
  controllers.getStyles(req, res);
});

app.post('/cart', (req, res) => {
  controllers.saveCart(req, res);
});

app.get('/reviews', controllers.getReviews);
app.get('/reviews/meta', controllers.reviewsMeta);
app.post('/reviews', controllers.postReview);
app.put('/reviews/:reviewId/helpful', controllers.markReviewAsHelpful);
app.put('/reviews/:reviewId/report', controllers.reportReview);

app.get('/products/:id', controllers.getProduct);
app.get('/products/:id/related', controllers.getRelated);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is listening on port ${PORT}`);
});
