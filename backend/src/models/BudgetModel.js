const mongoose = require('mongoose');

const BudgetSchema = new mongoose.Schema({
  description: {
    type: String,
  },
  sign: {
    type: String,
  },
  money: {
    type: Number,
  },
});

const BudgetModel = mongoose.model('Expense', BudgetSchema);

module.exports = BudgetModel;
