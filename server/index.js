require('dotenv').config();
const path = require('path');
const express = require('express');

const app = express();

// Serve static files from the React app
app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(express.json());

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});