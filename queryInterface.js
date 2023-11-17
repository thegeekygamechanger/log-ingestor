const express = require('express');
const router = express.Router();
const Log = require('./database');

// GET: Query logs
router.get('/', async (req, res) => {
    try {
        const query = {};

        // Add filters to the query if they exist in the request
        if (req.query.level) query.level = req.query.level;
        if (req.query.message) query.message = { $regex: req.query.message, $options: 'i' };
        if (req.query.resourceId) query.resourceId = req.query.resourceId;
        if (req.query.timestamp) query.timestamp = { $gte: req.query.timestamp.start, $lte: req.query.timestamp.end };
        if (req.query.traceId) query.traceId = req.query.traceId;
        if (req.query.spanId) query.spanId = req.query.spanId;
        if (req.query.commit) query.commit = req.query.commit;
        if (req.query.metadata) query['metadata.parentResourceId'] = req.query.metadata.parentResourceId;

        // Execute the query
        const logs = await Log.find(query);
        res.json(logs);
    } catch (err) {
        res.json({ message: err });
    }
});

module.exports = router;
