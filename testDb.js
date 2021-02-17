const db = require('./models');

// // create a blog post
// const newPost = new db.BlogPost({
//   title: 'We be sneezin',
//   body: 'Pollen, cat dander, and dog fur, oh my!'
// });

// // create a comment
// newPost.comments.push({ body: 'It\'s the cat dander for me!' })

// // save the blog post
// newPost.save(err => {
//   if (err) return console.log('🔥 Oh noes!', err)
//   return console.log('📜 New post')
// })

// db.BlogPost.findById('602d723c8a96c51979760693', (err, post) => {
//   post.comments.id('602d723c8a96c51979760694').remove()
//   post.save(err => {
//     console.log(`Post now has ${post.comments.length} comments`)
//   })
// })

// const product = new db.Product({ name: 'wrench', price: 5 });
// product.save();
// const order = new db.Order();
// order.products.push(product);
// order.save(err => {
//   console.log('Success! 😁')
//   process.exit()
// })

db.Order.findById('602d75e6b7c9561a690e4359').populate('products').exec((err, order) => {
  console.log(order)
  process.exit()
});