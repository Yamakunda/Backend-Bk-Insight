const express = require("express");
const router = express.Router();
const userController = require("../controllers/UserController");
const emailController = require("../controllers/EmailController");
const { authUserMiddleWare } = require("../middleware/authMiddleware");

router.post("/sign-up", userController.createUser); /*done*/
router.post("/log-in", userController.loginUser); /*done*/
router.put(
  "/update-user/:id",
  authUserMiddleWare,
  userController.updateUser
); /*done*/
router.get(
  "/get-details/:id",
  authUserMiddleWare,
  userController.getDetailsUser
); /*done*/
router.post("/refresh-token", userController.refreshToken); /*done*/
router.post("/log-out", userController.logoutUser); /*done*/
router.post("/sendEmail", emailController.sendEmail);

module.exports = router;
