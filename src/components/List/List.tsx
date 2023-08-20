import { IListArrayProps, IListProps } from '../../types';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import './List.scss';

const List = ({ title, list, handleRemove }: IListProps) => {
  return (
    <div className='list'>
      <h2
        className={`list__title ${
          title.toLowerCase() === 'income' ? 'list__title--income' : 'list__title--expenses'
        }`}
      >
        {title}
      </h2>
      {list?.map((item: IListArrayProps) => (
        <div className='list__item' key={item.id}>
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
            id={item.id}
            onClick={() => handleRemove(item.id)}
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
