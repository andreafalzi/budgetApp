import { ListArrayProps } from '../types';

export function deleteItem(list: ListArrayProps[], id: string) {
  const objWithIdIndex = list.findIndex((obj) => obj.id === parseInt(id));

  if (objWithIdIndex > -1) {
    list.splice(objWithIdIndex, 1);
  }

  console.log(list, id);

  return list;
}
