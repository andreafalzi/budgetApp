const BudgetModel = require('../models/BudgetModel');

const readExpenseRoute = async (req, res) => {
  const { description, sign, money } = req.body;
  const expense = new BudgetModel({
    description,
    sign,
    money,
  });
  const newExpense = await expense.save();
  res.json(newExpense);
};

module.exports = readExpenseRoute;
