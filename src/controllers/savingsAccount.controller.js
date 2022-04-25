const express = require("express");
const router = express.Router();

const SavingsAccount = require("../models/savingsAccount.model");

router.get("/", async (req, res) => {
	try {
		const savingsAccount = await SavingsAccount.find();
		return res.send(savingsAccount);
	} catch (err) {
		return res.status(500).send(err.message);
	}
});

router.post("/", async (req, res) => {
	try {
		const savingsAccount = await SavingsAccount.create(req.body);
		return res.send(savingsAccount);
	} catch (err) {
		return res.status(500).send(err.message);
	}
});
router.patch("/:id", async (req, res) => {
	try {
		const updateSavingsAccount = await SavingsAccount.findByIdAndUpdate();
		return res.send(updateSavingsAccount);
	} catch (err) {
		return res.status(500).send(err.message);
	}
});



module.exports = router;