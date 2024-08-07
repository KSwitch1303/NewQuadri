const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define schema
const yorubaWordsSchema = new Schema({
    word: {
        type: String,
        required: true,
        unique: true
    },
    meanings: [{
        tone: String,
        definition: String
    }]
});

// Create model
const YorubaWord = mongoose.model('YorubaWord', yorubaWordsSchema);

module.exports = YorubaWord;
