const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const options = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "BK Insight API",
      version: "1.0.0",
      description: "No API description",
    },
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT', 
        },
      },
    },
    servers: [
      {
        url: "http://localhost:8080", // Thay đổi dựa trên cấu hình của bạn
      },
    ],
  },
  apis: ["./routes/*.js"], // Đường dẫn đến tất cả các file chứa route
};

const specs = swaggerJsdoc(options);

module.exports = { specs, swaggerUi };
