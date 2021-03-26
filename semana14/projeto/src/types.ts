export type user = {
  id: number;
  name: string;
  nickname: string;
  email: string;
};

export type getUser = {
  id: string;
};

export type editUser = {
  id: string;
  name?: string;
  nickname?: string;
  email?: string;
};
