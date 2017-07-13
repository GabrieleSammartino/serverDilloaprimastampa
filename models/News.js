const mongoose = require('mongoose');
var newsSchema = mongoose.Schema({
        img: String,
        description: String
    }
);
News = mongoose.model('News',newsSchema);
module.exports = News;
