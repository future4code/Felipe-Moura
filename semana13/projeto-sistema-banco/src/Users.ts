export type createUser = {
  id: number;
  name: string;
  age: string;
  cpf: string;
  balance: number;
  extract: extract[];
};

export type extract = {
  description: string;
  value: number;
  data: number;
};

export const allUsers: createUser[] = [];
