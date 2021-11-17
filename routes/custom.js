const express = require('express');
const {
    Custom,
    Base,
    Frosting,
    Addon,
    Design
} = require('../models/customModel');

const router = express.Router();

router.get('/frosting', async (req, res) => {
    const frosting = await Frosting.find();
    res.send(frosting);
});

router.get('/frosting/:id', async (req, res) => {
    const frosting = await Frosting.findById(req.params.id);
    if (!frosting) res.status(404).send('Frosting not found :c');
    res.send(frosting);
});

router.get('/design', async(req, res) => {
    const design = await Design.find();
    res.send(design);
});

router.get('/design/:id', async (req, res) => {
    const design = await Design.findById(req.params.id);
    if (!design) res.status(404).send('Design not found :c');
    res.send(desing);
});

module.exports = router;