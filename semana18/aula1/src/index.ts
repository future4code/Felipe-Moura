import { User } from "./types/types";

export const user: User = {
  name: "felipe",
  balance: 100
}

export const performPurchace = (user: User, value: number): User | undefined =>{
  if(user.balance >= value){
    return{
      ...user,
      balance: user.balance - value
    }
  }
  return undefined
}
