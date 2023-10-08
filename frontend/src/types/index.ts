export interface IBudgetBoxProps {
  title: string;
  value: number;
}
export interface IListProps {
  title: string;
  isLoading: boolean;
  expenses?: Array<IListObjectProps>;
}

export interface IItemProps {
  item: IListObjectProps;
}

export interface IListObjectProps {
  _id?: string;
  description: string;
  sign: string;
  money: string;
}

export type ListObjectProps = MongoId | Description | Sign | Money;

export type MongoId = {
  _id: string;
};
export type Description = {
  description: string;
};
export type Sign = {
  sign: string;
};
export type Money = {
  money: string;
};
