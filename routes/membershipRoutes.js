const express = require("express");
const router = express.Router();
const Membership = require("../models/Membership");

router.post("/", async (req, res) => {
    const membership = new Membership(req.body);
    await membership.save();
    res.json(membership);
});

router.get("/", async (req, res) => {
    const memberships = await Membership.find();
    res.json(memberships);
});

router.put("/:id", async (req, res) => {
    const updated = await Membership.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
});

router.delete("/:id", async (req, res) => {
    await Membership.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted successfully" });
});

module.exports = router;