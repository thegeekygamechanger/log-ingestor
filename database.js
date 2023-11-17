const mongoose = require('mongoose');

// Define the schema for the log data
const LogSchema = mongoose.Schema({
    level: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    resourceId: {
        type: String,
        required: true
    },
    timestamp: {
        type: Date,
        required: true
    },
    traceId: {
        type: String,
        required: true
    },
    spanId: {
        type: String,
        required: true
    },
    commit: {
        type: String,
        required: true
    },
    metadata: {
        parentResourceId: {
            type: String,
            required: true
        }
    }
});

// Create an index to improve search performance
LogSchema.index({
    level: 'text',
    message: 'text',
    resourceId: 'text',
    traceId: 'text',
    spanId: 'text',
    commit: 'text',
    'metadata.parentResourceId': 'text'
});

module.exports = mongoose.model('Logs', LogSchema);
