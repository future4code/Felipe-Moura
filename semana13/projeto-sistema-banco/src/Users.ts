export type user = {
  id: number;
  name: string;
  age: number;
  balance: number;
  extract: extract[];
};

export type extract = {
  description: string;
  value: number;
};

export const users: user[] = [];
