const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const http = require("http");
const swaggerSetup = require("./swagger");
const accountRouter = require("./routes/AccountRouter");
const authRouter = require("./routes/AuthRouter");
const router = require("./routes/UserRouter");
const mongoose = require("mongoose");
const swaggerSpecs = require("./swagger");
// const userController = require('/controllers/UserController');
const { specs, swaggerUi } = require("./swagger");
dotenv.config();

const app = express();
const server = http.createServer(app);

const PORT = process.env.PORT || 8080;
const URI = process.env.mongo_URL;

app.use(express.json({ limit: "50mb" }));
app.use(bodyParser.json());

// Kết nối MongoDB
mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true });

// Kiểm tra kết nối MongoDB
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});

// Sử dụng Swagger UI
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));

app.use("/api/auth", authRouter);
// app.use("/api/account", accountRouter);

// Thêm Swagger

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
