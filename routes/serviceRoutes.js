const express = require("express");
const router = express.Router();
const Service = require("../models/Services");

router.post("/", async (req, res) => {
    const service = new Service(req.body);
    await service.save();
    res.json(service);
});

router.get("/", async (req, res) => {
    const services = await Service.find();
    res.json(services);
});

router.put("/:id", async (req, res) => {
    const updated = await Service.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
});

router.delete("/:id", async (req, res) => {
    await Service.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted successfully" });
});

module.exports = router;