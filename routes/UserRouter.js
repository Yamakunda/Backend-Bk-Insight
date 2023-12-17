// const express = require("express");
// const router = express.Router();
// const userController = require("../controllers/UserController");

// /**
//  * @swagger
//  * /user/create:
//  *   post:
//  *     summary: Create a new user
//  *     tags: [User]
//  *     requestBody:
//  *       required: true
//  *       content:
//  *         application/json:
//  *           schema:
//  *             $ref: '#/components/schemas/UserInput'
//  *     responses:
//  *       '200':
//  *         description: User created successfully
//  *         content:
//  *           application/json:
//  *             $ref: '#/components/schemas/UserResponse'
//  *       '500':
//  *         description: Internal server error
//  *         content:
//  *           application/json:
//  *             example:
//  *               status: "ERR"
//  *               message: "Internal Server Error"
//  */
// router.post("/create", userController.createUser);

// /**
//  * @swagger
//  * /user/login:
//  *   post:
//  *     summary: Login an existing user
//  *     tags: [User]
//  *     requestBody:
//  *       required: true
//  *       content:
//  *         application/json:
//  *           schema:
//  *             $ref: '#/components/schemas/LoginInput'
//  *     responses:
//  *       '200':
//  *         description: User logged in successfully
//  *         content:
//  *           application/json:
//  *             $ref: '#/components/schemas/LoginResponse'
//  *       '500':
//  *         description: Internal server error
//  *         content:
//  *           application/json:
//  *             example:
//  *               status: "ERR"
//  *               message: "Internal Server Error"
//  */
// router.post("/login", userController.loginUser);

// /**
//  * @swagger
//  * /user/update/{id}:
//  *   put:
//  *     summary: Update user details
//  *     tags: [User]
//  *     parameters:
//  *       - in: path
//  *         name: id
//  *         required: true
//  *         description: ID of the user to update
//  *         schema:
//  *           type: string
//  *     requestBody:
//  *       required: true
//  *       content:
//  *         application/json:
//  *           schema:
//  *             $ref: '#/components/schemas/UserInput'
//  *     responses:
//  *       '200':
//  *         description: User details updated successfully
//  *         content:
//  *           application/json:
//  *             $ref: '#/components/schemas/UserResponse'
//  *       '500':
//  *         description: Internal server error
//  *         content:
//  *           application/json:
//  *             example:
//  *               status: "ERR"
//  *               message: "Internal Server Error"
//  */
// router.put("/update/:id", userController.updateUser);

// /**
//  * @swagger
//  * /user/details/{id}:
//  *   get:
//  *     summary: Get user details
//  *     tags: [User]
//  *     parameters:
//  *       - in: path
//  *         name: id
//  *         required: true
//  *         description: ID of the user to get details
//  *         schema:
//  *           type: string
//  *     responses:
//  *       '200':
//  *         description: User details retrieved successfully
//  *         content:
//  *           application/json:
//  *             $ref: '#/components/schemas/UserResponse'
//  *       '500':
//  *         description: Internal server error
//  *         content:
//  *           application/json:
//  *             example:
//  *               status: "ERR"
//  *               message: "Internal Server Error"
//  */
// router.get("/details/:id", userController.getDetailsUser);

// /**
//  * @swagger
//  * /user/refresh-token:
//  *   post:
//  *     summary: Refresh user token
//  *     tags: [User]
//  *     requestBody:
//  *       required: true
//  *       content:
//  *         application/json:
//  *           schema:
//  *             $ref: '#/components/schemas/TokenInput'
//  *     responses:
//  *       '200':
//  *         description: Token refreshed successfully
//  *         content:
//  *           application/json:
//  *             $ref: '#/components/schemas/TokenResponse'
//  *       '500':
//  *         description: Internal server error
//  *         content:
//  *           application/json:
//  *             example:
//  *               status: "ERR"
//  *               message: "Internal Server Error"
//  */
// router.post("/refresh-token", userController.refreshToken);

// /**
//  * @swagger
//  * /user/logout:
//  *   post:
//  *     summary: Logout a user
//  *     tags: [User]
//  *     responses:
//  *       '200':
//  *         description: User logged out successfully
//  *         content:
//  *           application/json:
//  *             example:
//  *               status: "OK"
//  *               message: "Logout successfully"
//  *       '500':
//  *         description: Internal server error
//  *         content:
//  *           application/json:
//  *             example:
//  *               status: "ERR"
//  *               message: "Internal Server Error"
//  */
// router.post("/logout", userController.logoutUser);
// module.exports = router;
