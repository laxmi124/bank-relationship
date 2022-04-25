const express = require("express");
const router = express.Router();

const Branch = require("../models/masterAccount.model");

router.get("/", async (req, res) => {
	try {
		const branch = await Branch.find().populate("user_id");
		return res.send(branch);
	} catch (err) {
		return res.status(500).send(err.message);
	}
});


module.exports = router;