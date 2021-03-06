const { Post } = require('../models');

const postData = [
  {
    title: 'Merge Arrays',
    content:
      'Like objects, the spread operator (...) extracts all the elements from one array to another',
    user_id: 1,
  },
  {
    title: 'Use Shortcuts for Conditionals',
    content:
      'JavaScript allows you to use certain shortcuts to make your code easier on the eyes. In some simple cases you can use logical operators && and || instead of if and else',
    user_id: 1,
  },
  {
    title: 'Convert to the Largest Integer Using the ~~ Operator',
    content:
      'Using Math.floor to return the largest integer that&#39;s less than or equal to a given number in the equation takes up resources, not to mention it’s a fairly long string to keep in mind. A more efficient way is using the ~~ operator',
    user_id: 2,
  },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
