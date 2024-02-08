export type BudgetBoxTypeProps = {
  title: string;
  value: number;
};
export type ListTypeProps = {
  title: string;
  isLoading: boolean;
  expenses?: ListObjectTypeProps[];
};

export type ItemTypeProps = {
  item: ListObjectTypeProps;
};

export type ListObjectTypeProps = {
  _id?: MongoId;
  description?: Description;
  sign?: Sign;
  money?: Money;
};

export type MongoId = string | undefined;

export type Description = string;

export type Sign = string;

export type Money = string;
