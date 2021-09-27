require('dotenv').config();

module.exports = {
  swaggerDefinition: {
    info: {
      title: 'Swagger Documentation',
      description: 'Testing swagger documentation',
      contact: {
        name: 'R syawal',
      },
      servers: [process.env.BASE_API_URL],
    },
  },
  apis: ['../routes/*.js'],
};


