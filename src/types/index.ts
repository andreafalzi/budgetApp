export interface IBudgetBoxProps {
  title: string;
  value: number;
}
export interface IListProps {
  title: string;
  list?: ListObjectProps[];
  handleRemove?: (id: number) => void;
}

export interface IListObjectProps {
  _id?: number;
  description: string;
  sign: string;
  money: string;
}

export type ListObjectProps = Description | Sign | Money;

export type Description = {
  description: string;
};
export type Sign = {
  sign: string;
};
export type Money = {
  money: string;
};
