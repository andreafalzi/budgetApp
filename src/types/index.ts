export interface BudgetBoxProps {
  title: string;
  value: number;
}
export interface ListProps {
  title: string;
  list?: ListArrayProps[];
  handleRemove: (id: number) => void;
}

export interface ListArrayProps {
  id: number;
  description: string;
  sign: string;
  money: number;
}
