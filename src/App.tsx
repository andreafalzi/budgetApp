import { useState } from 'react';
import BudgetBox from './components/BudgetBox/BudgetBox';
import List from './components/List/List';
import { IListArrayProps } from './types';
import { blockInvalidChar, calc, calcTotal, currentMonth, months, year } from './utils';
import { BsCheck2Circle } from 'react-icons/bs';
import './App.scss';

function App() {
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
  const newListItem = (listItem: IListArrayProps, id: number) => {
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
    const newList = incomeArrayList?.filter((item: IListArrayProps) => item.id !== id);

    setIncomeArrayList(newList);
  }
  function handleRemoveExpenses(id: number) {
    const newList = expansesArrayList?.filter((item: IListArrayProps) => item.id !== id);

    setExpansesArrayList(newList);
  }

  const incomeTotal = calc(incomeArrayList);
  const expensesTotal = calc(expansesArrayList);

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
          onKeyDown={blockInvalidChar}
          id='money'
          value={money}
          onChange={(e) => setMoney(e.target.value)}
        />
        <button className='budget-input__button' type='button' onClick={handleSubmit}>
          <BsCheck2Circle size={20} color='black' />
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
