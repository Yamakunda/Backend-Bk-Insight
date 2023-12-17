// const express = require("express");
// const router = express.Router();
// const userController = require("../controllers/UserController");
// const { authUserMiddleWare } = require("../middleware/authMiddleware");

// /**
//  * @swagger
//  * tags:
//  *   name: Account
//  *   description: User account management
//  */


// /**
//  * @swagger
//  * /api/account/get-details/{id}:
//  *   get:
//  *     summary: Get details of a user
//  *     description: Retrieve detailed information about a user by ID
//  *     tags: [Account]
//  *     parameters:
//  *       - in: path
//  *         name: id
//  *         required: true
//  *         description: The ID of the user to get details for
//  *         schema:
//  *           type: string 
//  *     responses:
//  *       '200':
//  *         description: Get User Successfully
//  *         content:
//  *           application/json:
//  *             example: { id: "123abc", fullname: "John Doe", email: "JohnDoe@example.com", username: "jonedie" }
//  *       '400':
//  *         description: Bad request
//  *         content:
//  *           application/json:
//  *             example:
//  *               error: 'No exist user'
//  *       '500':
//  *         description: Internal server error
//  *         content:
//  *           application/json:
//  *             example:
//  *               error: 'Internal server error'
//   */

// router.get(
//   "/get-details/:id",
//   authUserMiddleWare,
//   userController.getDetailsUser
// );

// module.exports = router;
