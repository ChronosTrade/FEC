const axios = require('axios');
require('dotenv').config();

const baseURL = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp';

const headers = {
  Authorization: process.env.AUTH,
};

exports.getStyles = (req, res) => {
  axios
    .get(`${baseURL}/products/${req.query.ID}/styles`, { headers })
    .then((response) => {
      res.send(response.data);
    })
    .catch((err) => {
      console.error(err);
      res.status(500);
    });
};

exports.saveCart = (req, res) => {
  const data = {
    Parameter: req.data.sku_id,
    Type: req.data.quantity,
    Description: req.data.ID,
  };
  axios
    .post(`${baseURL}/cart`, data)
    .then(() => {
      console.log('Success');
      res.status(201);
    })
    .catch((err) => {
      console.error(err);
      res.status(500);
    });
};

exports.getReviews = (req, res) => {
  const productId = req.query.product_id;

  axios
    .get(`${baseURL}/reviews?product_id=${productId}`, { headers })
    .then((response) => {
      res.json(response.data);
    })
    .catch((err) => {
      console.error(err);
      res.status(500);
    });
};

exports.reviewsMeta = (req, res) => {
  const productId = req.query.product_id;

  axios
    .get(`${baseURL}/reviews/meta?product_id=${productId}`, { headers })
    .then((response) => {
      res.json(response.data);
    })
    .catch((err) => {
      console.error(err);
      res.status(500);
    });
};

exports.postReview = (req, res) => {
  const {
    productId,
    rating,
    summary,
    body,
    recommend,
    name,
    email,
    photos,
    characteristics,
  } = req.body;

  axios
    .post(
      `${baseURL}/reviews`,
      {
        productId,
        rating,
        summary,
        body,
        recommend,
        name,
        email,
        photos,
        characteristics,
      },
      { headers },
    )
    .then((response) => {
      res.status(201).send(response.data);
    })
    .catch((err) => {
      console.error(err);
      res.status(500);
    });
};

exports.markReviewAsHelpful = (req, res) => {
  const { reviewId } = req.params;

  axios
    .put(`${baseURL}/reviews/${reviewId}/helpful`, null, { headers })
    .then(() => {
      res.status(204).send();
    })
    .catch((err) => {
      console.error(err);
      res.status(500);
    });
};

exports.reportReview = (req, res) => {
  const { reviewId } = req.params;

  axios
    .put(`${baseURL}/reviews/${reviewId}/report`, null, { headers })
    .then(() => {
      res.status(204).send();
    })
    .catch((err) => {
      console.error(err);
      res.status(500);
    });
};

exports.getProduct = (req, res) => {
  const productId = req.params.id;
  axios
    .get(`${baseURL}/products/${productId}`, { headers })
    .then((response) => {
      res.status(200).send(response.data);
    })
    .catch((err) => {
      console.error(err);
      res.status(500);
    });
};

exports.getRelated = (req, res) => {
  const productId = req.params.id;
  axios
    .get(`${baseURL}/products/${productId}/related`, { headers })
    .then((response) => {
      res.status(200).send(response.data);
    })
    .catch((err) => {
      console.error(err);
      res.status(500);
    });
};
