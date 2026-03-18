const express = require("express");
const router = express.Router();
const Trainer = require("../models/Trainers");

router.post("/", async (req, res) => {
    const trainer = new Trainer(req.body);
    await trainer.save();
    res.json(trainer);
});

router.get("/", async (req, res) => {
    const trainers = await Trainer.find();
    res.json(trainers);
});

router.put("/:id", async (req, res) => {
    const updated = await Trainer.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
});

router.delete("/:id", async (req, res) => {
    await Trainer.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted successfully" });
});

module.exports = router;