const mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);

/**
 * @description Mongoose DB connector
 */
module.exports = () => {
  const db = process.env.db;
  mongoose.connect(db, {useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log(`Connected to DB`);
  })
  .catch((err) => {
    console.log(`Not Connected ${err}`);
  })
}