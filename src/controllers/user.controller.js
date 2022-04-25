const express = require("express");
const router = express.Router();

const User = require("../models/user.model");

router.get("/", async (req, res) => {
	try {
		const user = await User.find();
		return res.send(user);
	} catch (err) {
		return res.status(500).send(err.message);
	}
});

router.post("/", async (req, res) => {
	try {
		const user = await User.create(req.body);
		return res.send(user);
	} catch (err) {
		return res.status(500).send(err.message);
	}
});



module.exports = router;