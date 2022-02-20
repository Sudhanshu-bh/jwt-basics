const express = require("express");
const router = express.Router();

const authMiddleware = require("../middleware/auth");
const { login, dashboard } = require("../controllers/main");

// router.use(authMiddleware)   // use this if we want to use the middleware for all the below routes in this file.

router.route("/dashboard").get(authMiddleware, dashboard);
router.route("/login").post(login);

module.exports = router;
