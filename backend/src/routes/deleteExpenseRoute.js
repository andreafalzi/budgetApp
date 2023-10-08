const BudgetModel = require('../models/BudgetModel');

const deleteExpenseRoute = async (req, res) => {
  const { id } = req.params;
  const expense = await BudgetModel.findByIdAndDelete(id);
  // await expense.deleteOne();
  res.status(204).json(expense);
};

module.exports = deleteExpenseRoute;
