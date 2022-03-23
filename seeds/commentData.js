const { Comment } = require('../models');

const commentData = [
  {
    comment: 'Please comment and let me know what you think of this post',
    user_id: 1,
    post_id: 1,
  },
  {
    comment: 'Great tip, one to remember!',
    user_id: 2,
    post_id: 1,
  },
  {
    comment: 'Thanks for posting this!',
    user_id: 3,
    post_id: 1,
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
