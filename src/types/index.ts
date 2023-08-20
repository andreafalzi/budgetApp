export interface IBudgetBoxProps {
  title: string;
  value: number;
}
export interface IListProps {
  title: string;
  list?: IListArrayProps[];
  handleRemove: (id: number) => void;
}

export interface IListArrayProps {
  id: number;
  description: string;
  sign: string;
  money: number;
}
