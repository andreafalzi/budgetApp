const BudgetModel = require('../models/BudgetModel');

const getExpensesRoute = async (req, res) => {
  const expenses = await BudgetModel.find();
  res.json(expenses);
};

module.exports = getExpensesRoute;
