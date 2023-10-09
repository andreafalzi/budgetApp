import { useState } from 'react';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import List from './components/List/List';
import calc, { blockInvalidChar } from './utils';
import { BsCheck2Circle } from 'react-icons/bs';
import { IListObjectProps, ListObjectProps } from './types';
import readExpensesRequest from './api/readExpensesRequest';
import BudgetBox from './components/BudgetBox/BudgetBox';

import './App.scss';
import createExpenseRequest from './api/createExpenseRequest';

function App() {
  const now = new Date();
  const currentMonth = now.getMonth();
  const year = now.getFullYear();
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const [form, setForm] = useState({
    sign: '+',
    description: '',
    money: '',
  });

  // These methods will update the state properties.
  function updateForm(value: ListObjectProps) {
    return setForm((prev) => {
      return { ...prev, ...value };
    });
  }

  const { isLoading, data: expenses } = useQuery('expenses', readExpensesRequest);

  const incomeArray = expenses?.filter((expense: IListObjectProps) => expense.sign === '+');
  const expenseArray = expenses?.filter((expense: IListObjectProps) => expense.sign === '-');

  const queryClient = useQueryClient();

  const { mutate: createExpense } = useMutation((newExpense) => createExpenseRequest(newExpense), {
    onSettled: () => {
      queryClient.invalidateQueries('expenses');
    },
  });

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    // When a post request is sent to the create url, we'll add a new record to the database.
    const newExpense = { ...form };
    if (form.description === '') return alert('Description cannot be empty');
    if (form.money === '') return alert('Value cannot be empty');

    createExpense(newExpense);

    setForm({ sign: '+', description: '', money: '' });
  };

  const incomeTotal = calc(incomeArray);
  const expensesTotal = calc(expenseArray);

  function calcTotal(income: number, expenses: number) {
    return income - expenses;
  }

  const totalBudget = calcTotal(incomeTotal, expensesTotal);
  return (
    <>
      <div className='top'>
        <h3 className='top__title'>Available Budget in {`${months[currentMonth]} ${year}`}</h3>
        <p className='top__total'>{totalBudget.toString()}</p>
        <BudgetBox title='Income' value={incomeTotal} />
        <BudgetBox title='Expenses' value={expensesTotal} />
      </div>
      <div className='budget-input'>
        <select
          className='budget-input__select'
          name='sign'
          id='sign'
          value={form.sign}
          onChange={(e) => updateForm({ sign: e.target.value })}
        >
          <option value='+'>+</option>
          <option value='-'>-</option>
        </select>
        <input
          className='budget-input__text'
          type='text'
          name='description'
          id='description'
          placeholder='Add description'
          value={form.description}
          onChange={(e) => {
            updateForm({ description: e.target.value });
          }}
        />
        <input
          className='budget-input__number'
          type='number'
          name='money'
          placeholder='Value'
          onKeyDown={blockInvalidChar}
          id='money'
          value={form.money}
          onChange={(e) => updateForm({ money: e.target.value })}
        />
        <button className='budget-input__button' type='button' onClick={handleSubmit}>
          <BsCheck2Circle size={20} color='black' />
        </button>
      </div>
      <div className='bottom'>
        <List title='Income' isLoading={isLoading} expenses={incomeArray} />
        <List title='Expenses' isLoading={isLoading} expenses={expenseArray} />
      </div>
    </>
  );
}

export default App;
