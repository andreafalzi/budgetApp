import { BarLoader } from 'react-spinners';
import Item from '../Item/Item';
import { IListProps } from '../../types';

import './List.scss';

const List = ({ title, isLoading, expenses }: IListProps) => {
  return (
    <div className='list'>
      <h2
        className={`list__title ${
          title.toLowerCase() === 'income' ? 'list__title--income' : 'list__title--expenses'
        }`}
      >
        {title}
      </h2>
      {isLoading ? (
        <BarLoader color='#7fffd4' />
      ) : (
        expenses?.map((item) => <Item key={item._id} item={item} />)
      )}
    </div>
  );
};
export default List;
