import { performPurchace } from "../src"
import { User } from "../src/types/types"

test("Testing balance greater than value", () =>{
  //Dados do usupario
  const user : User ={
    name: "Felipe",
    balance: 1000
  }

  //Implementado a função
  const result = performPurchace(user, 400)
  //O que espero de resposta
  expect(result).toEqual({
    name: "Felipe",
    balance: 600
  })
})

test("Testing balance greater than value", () =>{
  const user : User ={
    name: "Felipe",
    balance: 400
  }

  //Implementado a função
  const result = performPurchace(user, 400)
  expect(result).toEqual({
    ...user,
    balance: 0
  })
})

test("Testing balance greater than value", () => {
	const user: User = {
		name: "Astrodev",
		balance: 30
	}

	const result = performPurchace(user, 50)
	
	expect(result).not.toBeDefined()
})