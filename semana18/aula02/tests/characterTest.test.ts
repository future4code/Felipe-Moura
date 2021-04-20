import { createCharacter, performAttack, validateCharacter } from "../src/types/Caracter"

describe("Testing validade empty proprieties", () => {
  test("Should return false for empty name", () => {
    const character = {
      name: "",
      vitality: 1500,
      defense: 200,
      attack: 100
    }

    const result = validateCharacter(character)

    expect(result).toBe(false)
  })
  test("Should return false for vitality less than 0", () => {
    const character = {
      name: "Kratos",
      vitality: 0,
      defense: 200,
      attack: 100
    }

    const result = validateCharacter(character)
    //Espero que a resposta da função seja false
    expect(result).toBe(false)
  })
  test("Should return false for attack less than 0", () => {
    const character = {
      name: "Kratos",
      vitality: 1500,
      defense: 200,
      attack: 0
    }

    const result = validateCharacter(character)
    //Espero que a resposta da função seja false
    expect(result).toBe(false)
  })
  test("Should return false for defense less than 0", () => {
    const character = {
      name: "Kratos",
      vitality: 1500,
      defense: 0,
      attack: 200
    }

    const result = validateCharacter(character)
    //Espero que a resposta da função seja false
    expect(result).toBe(false)
  })
  test("Should return false for vitality or defense or attack less than 0", () => {
    const character = {
      name: "Kratos",
      vitality: 1500,
      defense: 150,
      attack: -200
    }

    const result = validateCharacter(character)
    //Espero que a resposta da função seja false
    expect(result).toBe(false)
  })
  test("Should return true for character valid", () => {
    const character = {
      name: "Kratos",
      vitality: 1500,
      defense: 150,
      attack: 200
    }

    //A função validateCharacter retorna ou false ou true somente.
    const result = validateCharacter(character)
    //Espero que a resposta da função seja false
    expect(result).toBe(true)
  })

  test("Teste Attack Method and Vitality", () => {
    //Função de "mentira" para realizar os testes
    const validatorMock = jest.fn(() => {
      return true
    })
    const attacker: createCharacter = {
      name: "Kratos",
      vitality: 1500,
      attack: 600,
      defense: 200
    }
    const defender: createCharacter = {
      name: "Ricky",
      vitality: 1500,
      attack: 800,
      defense: 400
    }

    //Executada a função de ataque
    performAttack(attacker, defender, validatorMock as any)

    expect(defender.vitality).toEqual(1300)
    expect(validatorMock).toHaveBeenCalled()
    expect(validatorMock).toHaveBeenCalledTimes(2)
    expect(validatorMock).toHaveReturnedTimes(2)


  })
  test("Should Return invalid character error", () => {
    const validatorMock = jest.fn(() => {
      return false
    })
    const attacker: createCharacter = {
      name: "Kratos",
      vitality: 1500,
      attack: 600,
      defense: 200
    }
    const defender: createCharacter = {
      name: "Ricky",
      vitality: 1500,
      attack: 800,
      defense: 400
    }
    //Try Catch para verificar error / acerto. Nesse casso vai dar error porque a função validateMock vai mudar para false a resosta
    try {
      performAttack(attacker, defender, validatorMock as any)
    } catch (error) {
      expect(error.message).toBe("Invalid character")
      expect(validatorMock).toHaveBeenCalled()
      expect(validatorMock).toHaveBeenCalledTimes(1)
      expect(validatorMock).toHaveReturnedTimes(1)

    }
  })

  test("Should Attacker Vitality reduce with", () =>{
    const validatorMock = jest.fn(() => {
      return true
    })
    const attacker: createCharacter = {
      name: "Kratos",
      vitality: 1500,
      attack: 600,
      defense: 200
    }
    const defender: createCharacter = {
      name: "Ricky",
      vitality: 1500,
      attack: 800,
      defense: 800
    }

    performAttack(attacker, defender, validatorMock as any)
    expect(attacker.vitality).toEqual(1300)
  })
  test("Should Vitality not reduce with", () =>{
    const validatorMock = jest.fn(() => {
      return true
    })
    const attacker: createCharacter = {
      name: "Kratos",
      vitality: 1500,
      attack: 600,
      defense: 200
    }
    const defender: createCharacter = {
      name: "Ricky",
      vitality: 1500,
      attack: 800,
      defense: 600
    }

    performAttack(attacker, defender, validatorMock as any)
    expect(attacker.vitality).toEqual(1500)
  })

})