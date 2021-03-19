export type createUser = {
  id: number;
  name: string;
  age: number;
  cpf: string;
  balance: number;
  extract: extract[]
};

export type extract = {
  description: string;
  value: number;
};



export const allUsers: createUser[] = [];
