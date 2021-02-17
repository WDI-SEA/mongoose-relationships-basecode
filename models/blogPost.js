const mongoose = require('mongoose');

// make comment schema
const commentSchema = new mongoose.Schema({
  body: {
    required: true,
    type: String
  },
  creator: {
    type: String,
    default: 'Anonymous'
  },
  date: {
    type: Date,
    default: Date.now()
  }
});

// make blogPost schema
const blogPostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  body: String,
  comments: [commentSchema]
})

// export
module.exports = mongoose.model('BlogPost', blogPostSchema);