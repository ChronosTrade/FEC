# Piraeus Retail Web-Portal

## Overview

This project is a single-page e-commerce website. This platform offers users an interactive UI where they can explore products or services available for purchase. Notable features encompass the ability to write reviews, and upload photos through a RESTful API.

With the provided wireframe layout, our trio of software engineers was tasked with crafting a front-end that both mirrored the design and adhered to a set of feature specifications.
![templates](./client/src/assets/piraeus.jpg)

## Components
1. Product Overview
1. Related Products
1. Ratings & Reviews
   
## Usage

1. **Install the required dependencies**:
    ```bash
    npm install
    ```

2. **Start the development server**:
    Rename the example.env to .env, and replace the AUTH key.
    ```bash
    npm run server-dev
    ```

3. **Auto build for client**:
    ```bash
    npm run client-dev
    ```

4. **Access the application**:
    Open your browser and navigate to `http://localhost:3000`.

5. **Format Check**:
    ```bash
    npm run lint
    ```
6. **Run test**:
    ```bash
    npm run test
    ```

## Project Structure
    .
    ├── ...
    ├── client/src
    │   ├── assets
    │   ├── components    
    │   │   ├──  App.jsx  # main page
    │   │   ├──  ...      # other components
    │   ├── index.jsx 
    ├── client/build
    ├── server
    │   ├── index.js      # server entry
    │   ├── ...
    ├──  package.json
    ├──  README.md
    ├──  webpack.config.js  
    ├── .eslintrc.js      # eslint config
    │ ...



## Technologies Used
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![NodeJS](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![ExpressJS](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)
![Axios](https://img.shields.io/badge/Axios-5A29E4.svg?style=for-the-badge&logo=Axios&logoColor=white)
![Babel](https://img.shields.io/badge/Babel-F9DC3E.svg?style=for-the-badge&logo=Babel&logoColor=black)
![Webpacl](https://img.shields.io/badge/Webpack-8DD6F9.svg?style=for-the-badge&logo=Webpack&logoColor=black)

## Contributors

[Taryn Wiedrick](https://github.com/TarynCovert)\
[Patrick Alexandre](https://github.com/palexandre1)\
[Jliu](https://github.com/zulliu)

## License
MIT: <https://rem.mit-license.org>
Copyright (c) ChronosTrade