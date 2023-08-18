import { BudgetBoxProps } from '../../types';
import './BudgetBox.scss';

const BudgetBox = ({ title, value }: BudgetBoxProps) => {
  return (
    <div
      className={`budget-box ${
        title.toLowerCase() === 'income' ? 'budget-box--income' : 'budget-box--expense'
      }`}
    >
      <p className='budget-box__text'>{title}</p>
      <p className='budget-box__number'>{value}</p>
    </div>
  );
};
export default BudgetBox;
