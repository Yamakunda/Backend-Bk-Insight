const express = require("express");
const router = express.Router();
const userController = require("../controllers/UserController");

/**
 * @swagger
 * tags:
 *   name: Auth
 *   description: Authorization
 */

/**
 * @swagger
 * /api/auth/sign-up:
 *   post:
 *     summary: Register a new user
 *     tags: [Auth]
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               fullname:
 *                 type: string
 *               username:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *               confirmPassword:
 *                  type: string
 *               phone:
 *                 type: string
 *             required:
 *               - fullname
 *               - username
 *               - email
 *               - password
 *               - confirmPassword
 *               - phone
 *           examples:
 *             example:
 *               value:
 *                 fullname: "John Doe"
 *                 username: "johndoe"
 *                 email: "john.doe@example.com"
 *                 password: "123456"
 *                 confirmPassword: "123456"
 *                 phone: "0123456789"
 *     responses:
 *       '200':
 *         description: User registered successfully
 *         content:
 *           application/json:
 *             example:
 *               message: 'Sign up success'
 *       '400':
 *         description: Bad request
 *         content:
 *           application/json:
 *             example:
 *               error: 'User already exists'
 *       '500':
 *         description: Internal server error
 *         content:
 *           application/json:
 *             example:
 *               error: 'Internal server error'
 */
router.post("/sign-up", userController.createUser);


/**
 * @swagger
 * /api/auth/login:
 *   post:
 *     summary: Log in an existing user
 *     tags: [Auth]
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *             required:
 *               - email
 *               - password
 *           examples:
 *             example:
 *               value:
 *                 email: "john.doe@example.com"
 *                 password: "1234567"
 *     responses:
 *       '200':
 *         description: User logged in successfully
 *         content:
 *           application/json:
 *             example:
 *               token: 'your_access_token'
 *       '401':
 *         description: Unauthorized, invalid credentials
 *         content:
 *           application/json:
 *             example:
 *               error: 'Invalid credentials'
 *       '500':
 *         description: Internal server error
 *         content:
 *           application/json:
 *             example:
 *               error: 'Internal server error'
 */
router.post("/login", userController.loginUser);

/**
 * @swagger
 * /api/auth/log-out:
 *   post:
 *     summary: Logout user
 *     description: Invalidate user's access token to log them out.
 *     security:
 *       - bearerAuth: []  # Thực hiện Bearer Authentication
 *     tags: [Auth]
 *     responses:
 *       '200':
 *         description: Successful logout
 *         content:
 *           application/json:
 *             example:
 *               message: 'Logout successful'
 *       '401':
 *         description: Unauthorized - Access token is missing or invalid
 *       '500':
 *         description: Internal server error
 */
router.post("/log-out", userController.logoutUser);

module.exports = router;
