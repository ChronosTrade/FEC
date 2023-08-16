const axios = require('axios');
require('dotenv').config();

const baseURL = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp';

const headers = {
  Authorization: process.env.AUTH,
};

exports.getStyles = (req, res) => {
  const config = {
    headers: {
      Authorization: process.env.AUTH,
    },
  };
  axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/${req.query.ID}/styles`, config)
    .then((response) => {
      res.send(response.data);
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.saveCart = (req, res) => {
  const data = {
    Parameter: req.data.sku_id,
    Type: req.data.quantity,
    Description: req.data.ID,
  };
  axios.post('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/cart', data)
    .then(() => {
      console.log('Success');
      res.sendStatus(201);
    })
    .catch((err) => {
      console.log(err);
    });
};

// get reviews
exports.getReviews = (req, res) => {
  const ProductId = req.query.product_id;

  axios
    .get(`${baseURL}/reviews?product_id=${ProductId}`, { headers })
    .then((response) => {
      res.json(response.data);
    })
    .catch((err) => {
      res.status(500).send(err.message);
    });
};

// get reviews details
exports.reviewsMeta = (req, res) => {
  const ProductId = req.query.product_id;

  axios
    .get(`${baseURL}/reviews/meta?product_id=${ProductId}`, { headers })
    .then((response) => {
      res.json(response.data);
    })
    .catch((err) => {
      res.status(500).send(err.message);
    });
};

// get reviews
exports.getReviews = (req, res) => {
  const ProductId = req.query.product_id;

  axios
    .get(`${baseURL}/reviews?product_id=${ProductId}`, { headers })
    .then((response) => {
      res.json(response.data);
    })
    .catch((err) => {
      res.status(500).send(err.message);
    });
};

// get reviews details
exports.reviewsMeta = (req, res) => {
  const ProductId = req.query.product_id;

  axios
    .get(`${baseURL}/reviews/meta?product_id=${ProductId}`, { headers })
    .then((response) => {
      res.json(response.data);
    })
    .catch((err) => {
      res.status(500).send(err.message);
    });
};

exports.getProduct = (req, res) => {
  const ProductId = req.params.id;
  axios.get(`${baseURL}/products/${ProductId}`, {headers})
    .then((response) => {
      res.status(200).send(response.data);
    })
    .catch((err) => {
      res.status(500)
    })
}

exports.getRelated = (req, res) => {
  const ProductId = req.params.id
  axios.get(`${baseURL}/products/${ProductId}/related`, {headers})
    .then((response) => {
      res.status(200).send(response.data);
    })
    .catch((err) => {
      res.status(500)
    })
}