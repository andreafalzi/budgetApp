import { AiOutlineCloseCircle } from "react-icons/ai";
import { ItemTypeProps, MongoId } from "../../types";
import { useMutation, useQueryClient } from "react-query";
// import updateExpenseRequest from '../../api/updateExpenseRequest';

import "./Item.scss";
import deleteExpenseRequest from "../../api/deleteExpenseRequest";

const Item = ({ item }: ItemTypeProps) => {
  const queryClient = useQueryClient();

  // const { mutate: updateExpense } = useMutation(
  //   () => {
  //     return updateExpenseRequest({
  //       ...item,
  //       description: item.description,
  //       sign: item.sign,
  //       money: item.money,
  //     });
  //   },
  //   {
  //     onSettled: () => {
  //       queryClient.invalidateQueries('expenses');
  //     },
  //   }
  // );

  const { mutate: deleteExpense } = useMutation(
    (deleteExpense: MongoId) => deleteExpenseRequest(deleteExpense),
    {
      onSettled: () => {
        queryClient.invalidateQueries("expenses");
      },
    }
  );

  return (
    <div className="item" key={item._id}>
      <p className="item__text">{item.description}</p>
      <p
        className={`item__number ${
          item.sign === "+" ? "item__number--income" : "item__number--expenses"
        }`}
      >
        {item.sign} {item.money}
      </p>
      <div className="item__icon-box">
        {/* <AiOutlineEdit
          id={item._id}
          // onClick={() => updateExpense(item._id)}
          size={24}
          className={`item__icon ${
            item.sign === '+' ? 'item__icon--income' : 'item__icon--expenses'
          }`}
        /> */}
        <AiOutlineCloseCircle
          id={item._id}
          onClick={() => deleteExpense(item._id)}
          size={24}
          className={`item__icon ${
            item.sign === "+" ? "item__icon--income" : "item__icon--expenses"
          }`}
        />
      </div>
    </div>
  );
};
export default Item;

// const Modal = ()=>(
//   <div className="item__modal">

//   </div>
// )
