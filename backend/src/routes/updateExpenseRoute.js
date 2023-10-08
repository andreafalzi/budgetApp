const BudgetModel = require('../models/BudgetModel');

const updateExpenseRoute = async (req, res) => {
  const { id } = req.params;
  const expense = await BudgetModel.findById(id);
  expense.description = req.body.description;
  expense.sign = req.body.sign;
  expense.money = req.body.money;
  await expense.save();
  res.json(expense);
};

module.exports = updateExpenseRoute;
