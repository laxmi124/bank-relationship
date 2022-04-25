const express = require("express");
const router = express.Router();

const MasterAccount = require("../models/masterAccount.model");
const SavingsAccount = require("../models/savingsAccount.model");
const FixedAccount = require("../models/fixedAccount.model");

router.get("/", async (req, res) => {
	try {
		const masterAccount = await MasterAccount.find().populate("user_id");
		return res.send(masterAccount);
	} catch (err) {
		return res.status(500).send(err.message);
	}
});

router.get("/:id", async (req,res)=>{
	try{
		const getUser = await MasterAccount.findById("user_id");
		return res.status(200).json(getUser);
	}
	catch(err){
		return res.status(200).send(err.message);
	}
})
router.post("/", async (req, res) => {
	try {
		const createmasterAccount = await MasterAccount.create(req.body);
		return res.send(createmasterAccount);
	} catch (err) {
		return res.status(500).send(err.message);
	}
});
router.patch("/:id", async (req, res) => {
	try {
		const createmasterAccount = await SavingsAccount.findByIdAndUpdate("savingsAccount_id");
		return res.send(createmasterAccount);
	} catch (err) {
		return res.status(500).send(err.message);
	}
});
router.patch("/:id", async (req, res) => {
	try {
		const createmasterAccount = await FixedAccount.findByIdAndUpdate("fixedAccount");
		return res.send(createmasterAccount);
	} catch (err) {
		return res.status(500).send(err.message);
	}
});

module.exports = router;