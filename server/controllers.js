const axios = require('axios');
require('dotenv').config();

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
