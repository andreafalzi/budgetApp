export type BudgetBoxTypeProps = {
  title: string;
  value: number;
};
export type ListTypeProps = {
  title: string;
  isLoading: boolean;
  expenses?: ListObjectTypeProps[];
};

export type ItemTypeProps<T> = {
  item: T;
};

export type ListObjectTypeProps = {
  _id: MongoId;
  description: string;
  sign: string;
  money: string;
};

export type MongoId = string;
