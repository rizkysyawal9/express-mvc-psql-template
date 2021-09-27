const express = require('express');
require('dotenv').config();
const swaggerOptions = require('./config/swagger');
const swaggerJsDocs = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

// Define port
const PORT = process.env.PORT || 5000;

// run main app
const app = express();

// express plugins
// 1. express deserializer
app.use(express.json());

// 2. swagger documentation
const swaggerDocs = swaggerJsDocs(swaggerOptions);

const routes = require('./routes/index');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
app.use('/api/v1', routes);

app.listen(PORT, () => {
  console.log(`Server is listening to Port: ${PORT}`);
});
