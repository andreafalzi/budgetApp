const express = require('express');
const loginRoute = require('./routes/loginRoute');
const isLoggedIn = require('./middleware/isLoggedIn');
const getExpensesRoute = require('./routes/getExpensesRoute');
const updateExpenseRoute = require('./routes/updateExpenseRoute');
const readExpenseRoute = require('./routes/postExpenseRoute');
const deleteExpenseRoute = require('./routes/deleteExpenseRoute');

const router = express.Router();

router.post('/login', loginRoute);

router.post('/expenses', isLoggedIn, readExpenseRoute);
router.get('/expenses', isLoggedIn, getExpensesRoute); //isLoggedIn is a middleware that check jwt token
router.put('/expenses/:id', isLoggedIn, updateExpenseRoute);
router.delete('/expenses/:id', isLoggedIn, deleteExpenseRoute);

module.exports = router;
