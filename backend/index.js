/* eslint-disable */
// To connect with your mongoDB database
const mongoose = require('mongoose');
mongoose
  .connect('mongodb://andrea:Falzer88@127.0.0.1:27017/budgetAppDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Connected Successfully'))
  .catch((err) => console.log(err));

// Schema for users of app
const ItemSchema = new mongoose.Schema({
  sign: {
    type: String,
  },
  description: {
    type: String,
    required: true,
  },
  id: {
    type: Number,
    required: true,
    unique: true,
  },
  money: {
    type: Number,
    required: true,
    unique: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const Item = mongoose.model('Item', ItemSchema);
console.log(Item);
Item.createIndexes();

// For backend and express
const express = require('express');
const app = express();
const cors = require('cors');
console.log('App listen at port 5000');
app.use(express.json());
app.use(cors());
app.get('/', (req, resp) => {
  resp.send('App is Working');
  // You can check backend is working or not by
  // entering http://loacalhost:5000

  // If you see App is working means
  // backend working properly
});

app.post('/entry', async (req, resp) => {
  try {
    const item = new Item(req.body);
    let result = await item.save();
    result = result.toObject();
    if (result) {
      resp.send(req.body);
      console.log(result);
    }
  } catch (e) {
    resp.send('Something Went Wrong');
  }
});
app.listen(5000);
