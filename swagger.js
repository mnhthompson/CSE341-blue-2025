const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'First API',
    description: 'API'
  },
  host: 'cse341-blue-2025.onrender.com',
  schemes: ['https']
};

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/index.js'];

// make a swagger.json
swaggerAutogen(outputFile, endpointsFiles, doc);

