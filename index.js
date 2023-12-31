const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const routes = require("./routes");
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

dotenv.config();

const app = express();

const PORT = process.env.PORT || 3001;
const URI = process.env.mongo_URL;

app.use(cors());

// app.use(
//   cors({
//     origin: [
//       "http://localhost:3000",
//       "https://smarthome-iot-nhom13.netlify.app",
//       "https://chic-semifreddo-387257.netlify.app",
//       "https://transcendent-banoffee-f698fe.netlify.app",
//     ],
//     methods: ["GET", "POST", "PUT", "DELETE"],
//     credentials: true, // cho phép sử dụng các header như Cookies, Authentication header...
//     allowedHeaders: ["Content-Type", "Authorization", "token"],
//     exposedHeaders: ["Content-Disposition"],
//   })
// );

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb" }));
app.use(bodyParser.json());
app.use(cookieParser());

routes(app);

mongoose
  .connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to DB");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("err", err);
  });
