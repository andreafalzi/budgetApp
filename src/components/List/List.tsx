import { useState, useEffect } from 'react';

import { IListObjectProps, IListProps } from '../../types';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import './List.scss';

const List = ({ title }: IListProps) => {
  const [records, setRecords] = useState([]);

  // This method fetches the records from the database.
  useEffect(() => {
    async function getRecords() {
      const response = await fetch(`http://localhost:5050/record/`);

      if (!response.ok) {
        const message = `An error occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }

      const records = await response.json();
      setRecords(records);
    }

    getRecords();

    return;
  }, [records.length]);

  // This method will delete a record
  async function deleteRecord(id: number | undefined) {
    await fetch(`http://localhost:5050/record/${id}`, {
      method: 'DELETE',
    });

    const newRecords = records.filter((el) => el._id !== id);
    setRecords(newRecords);
  }
  return (
    <div className='list'>
      <h2
        className={`list__title ${
          title.toLowerCase() === 'income' ? 'list__title--income' : 'list__title--expenses'
        }`}
      >
        {title}
      </h2>
      {records?.map((item: IListObjectProps) => (
        <div className='list__item' key={item._id}>
          <p className='list__item__text'>{item.description}</p>
          <p
            className={`list__item__number ${
              title.toLowerCase() === 'income'
                ? 'list__item__number--income'
                : 'list__item__number--expenses'
            }`}
          >
            {item.sign} {item.money}
          </p>
          <AiOutlineCloseCircle
            id={item._id}
            onClick={() => deleteRecord(item._id)}
            size={24}
            className={`list__item__icon ${
              title.toLowerCase() === 'income'
                ? 'list__item__icon--income'
                : 'list__item__icon--expenses'
            }`}
          />
        </div>
      ))}
    </div>
  );
};
export default List;
