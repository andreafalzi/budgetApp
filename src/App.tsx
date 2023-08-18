import { useState } from 'react';
import './App.scss';
import BudgetBox from './components/BudgetBox/BudgetBox';
import List from './components/List/List';
import { ListArrayProps } from './types';

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
  const incomeArray = [
    { id: 0, sign: '+', description: 'bank account', money: 7000 },
    { id: 1, sign: '+', description: 'bank account', money: 7000 },
    { id: 2, sign: '+', description: 'bank account', money: 7000 },
    { id: 3, sign: '+', description: 'bank account', money: 7000 },
  ];
  const expensesArray = [{ id: 0, sign: '-', description: 'bank account', money: 7000 }];
  const [sign, setSign] = useState('+');
  const [description, setDescription] = useState('');
  const [money, setMoney] = useState('');
  const [incomeArrayList, setIncomeArrayList] = useState(incomeArray);
  const [expansesArrayList, setExpansesArrayList] = useState(expensesArray);

  const listItem = {
    id: 0,
    sign: '',
    description: '',
    money: 0,
  };
  const newListItem = (listItem: ListArrayProps, id: number) => {
    listItem.id = id;
    listItem.sign = sign;
    listItem.description = description;
    listItem.money = parseInt(money);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (description === '') return alert('Description cannot be empty');
    if (sign === '+') {
      const newId = incomeArrayList.slice(-1)[0].id + 1;
      newListItem(listItem, newId);
      setIncomeArrayList([...incomeArrayList, listItem]);
    }
    if (sign === '-') {
      const newId = expansesArrayList.slice(-1)[0].id + 1;
      newListItem(listItem, newId);
      setExpansesArrayList([...expansesArrayList, listItem]);
    }
    setSign('+');
    setDescription('');
    setMoney('');
  };

  function handleRemoveIncome(id: number) {
    const newList = incomeArrayList?.filter((item: ListArrayProps) => item.id !== id);

    setIncomeArrayList(newList);
  }
  function handleRemoveExpenses(id: number) {
    const newList = expansesArrayList?.filter((item: ListArrayProps) => item.id !== id);

    setExpansesArrayList(newList);
  }

  function calc(array: ListArrayProps[]) {
    return array.reduce((total, array) => total + array.money, 0);
  }

  const incomeTotal = calc(incomeArrayList);
  const expensesTotal = calc(expansesArrayList);

  function calcTotal(income: number, expenses: number) {
    return income - expenses;
  }

  const totalBudget = calcTotal(incomeTotal, expensesTotal);
  return (
    <>
      <div className='top'>
        <h3 className='top__title'>Available Budget in {`${months[currentMonth]} ${year}`}</h3>
        <p className='top__total'>{totalBudget}</p>
        <BudgetBox title='Income' value={incomeTotal} />
        <BudgetBox title='Expenses' value={expensesTotal} />
      </div>
      <div className='budget-input'>
        <select
          className='budget-input__select'
          name='sign'
          id='sign'
          value={sign}
          onChange={(e) => setSign(e.target.value)}
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
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />
        <input
          className='budget-input__number'
          type='number'
          name='money'
          placeholder='Value'
          id='money'
          value={money}
          onChange={(e) => setMoney(e.target.value)}
        />
        <button className='budget-input__button' type='button' onClick={handleSubmit}>
          ✔️
        </button>
      </div>
      <div className='bottom'>
        <List title='Income' list={incomeArrayList} handleRemove={handleRemoveIncome} />
        <List title='Expenses' list={expansesArrayList} handleRemove={handleRemoveExpenses} />
      </div>
    </>
  );
}

export default App;