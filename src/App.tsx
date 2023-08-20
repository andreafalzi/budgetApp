import { useState } from 'react';
// import BudgetBox from './components/BudgetBox/BudgetBox';
import List from './components/List/List';
// import { ListArrayProps, ListProps } from './types';
import { blockInvalidChar } from './utils';
import { BsCheck2Circle } from 'react-icons/bs';
import './App.scss';
import { ListObjectProps } from './types';

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
  // const [sign, setSign] = useState('+');
  // const [description, setDescription] = useState('');
  // const [money, setMoney] = useState('');
  // const [incomeArrayList, setIncomeArrayList] = useState(incomeArray);
  // const [expansesArrayList, setExpansesArrayList] = useState(expensesArray);

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

  // const listItem = {
  //   id: 0,
  //   sign: '',
  //   description: '',
  //   money: 0,
  // };
  // const newListItem = (listItem: ListArrayProps, id: number) => {
  //   listItem.id = id;
  //   listItem.sign = sign;
  //   listItem.description = description;
  //   listItem.money = parseInt(money);
  // };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    // When a post request is sent to the create url, we'll add a new record to the database.
    const newPerson = { ...form };
    if (form.description === '') return alert('Description cannot be empty');
    if (form.money === '') return alert('Value cannot be empty');

    await fetch('http://localhost:5050/record', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newPerson),
    }).catch((error) => {
      window.alert(error);
      return;
    });

    setForm({ sign: '+', description: '', money: '' });

    // if (sign === '+') {
    //   const newId = incomeArrayList.slice(-1)[0].id + 1;
    //   newListItem(listItem, newId);
    //   setIncomeArrayList([...incomeArrayList, listItem]);
    // }
    // if (sign === '-') {
    //   const newId = expansesArrayList.slice(-1)[0].id + 1;
    //   newListItem(listItem, newId);
    //   setExpansesArrayList([...expansesArrayList, listItem]);
    // }

    // let result = await fetch('http://localhost:5000/entry', {
    //   method: 'post',
    //   body: JSON.stringify(listItem),
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    // });
    // result = await result.json();
    // console.warn(result);
    // if (result) {
    //   alert('Data saved succesfully');
    //   setSign('+');
    //   setDescription('');
    //   setMoney('');
    // }
  };

  // function handleRemoveIncome(id: number) {
  //   const newList = incomeArrayList?.filter((item: ListArrayProps) => item.id !== id);

  //   setIncomeArrayList(newList);
  // }
  // function handleRemoveExpenses(id: number) {
  //   const newList = expansesArrayList?.filter((item: ListArrayProps) => item.id !== id);

  //   setExpansesArrayList(newList);
  // }

  // function calc(array: ListArrayProps[]) {
  //   return array.reduce((total, array) => total + array.money, 0);
  // }

  // const incomeTotal = calc(incomeArrayList);
  // const expensesTotal = calc(expansesArrayList);

  // function calcTotal(income: number, expenses: number) {
  //   return income - expenses;
  // }

  // const totalBudget = calcTotal(incomeTotal, expensesTotal);
  return (
    <>
      <div className='top'>
        <h3 className='top__title'>Available Budget in {`${months[currentMonth]} ${year}`}</h3>
        {/* <p className='top__total'>{totalBudget}</p>
        <BudgetBox title='Income' value={incomeTotal} />
        <BudgetBox title='Expenses' value={expensesTotal} /> */}
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
        <List title='Income' />
        {/* <List title='Expenses' list={expansesArrayList} handleRemove={handleRemoveExpenses} /> */}
      </div>
    </>
  );
}

export default App;
