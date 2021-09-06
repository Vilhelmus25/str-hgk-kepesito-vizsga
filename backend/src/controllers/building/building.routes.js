/**
 * @Todo két végpont implementálása egy put és get metódusra
 *
 */
const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    return controller.findAll(req, res, next);
});

router.put('/:id', (req, res, next) => {
    return controller.update(req, res, next);
});

module.exports = router;