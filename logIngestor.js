const express = require('express');
const router = express.Router();
const Log = require('./database');

// POST: Ingest logs
router.post('/', async (req, res) => {
    try {
        const log = new Log({
            level: req.body.level,
            message: req.body.message,
            resourceId: req.body.resourceId,
            timestamp: req.body.timestamp,
            traceId: req.body.traceId,
            spanId: req.body.spanId,
            commit: req.body.commit,
            metadata: req.body.metadata
        });

        const savedLog = await log.save();
        res.json(savedLog);
    } catch (err) {
        res.json({ message: err });
    }
});

module.exports = router;
