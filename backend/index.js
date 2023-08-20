// To connect with your mongoDB database
const mongoose = require('mongoose');
mongoose.connect(
  'mongodb://localhost:27017/',
  {
    dbName: 'budgetAppDB',
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => (err ? console.log(err) : console.log('Connected to budgetAppDB database'))
);

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
const Item = mongoose.model('item', ItemSchema);
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
    } else {
      console.log('User already register');
    }
  } catch (e) {
    resp.send('Something Went Wrong');
  }
});
app.listen(5000);
