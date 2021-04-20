export interface createCharacter {
  name: string,
  vitality: number,
  defense: number,
  attack: number
}

export const validateCharacter = (
  character: createCharacter
): boolean => {
  if (!character.name || character.vitality === undefined || character.attack === undefined || character.defense === undefined) {
    return false
  }
  if (character.vitality <= 0 || character.attack <= 0 || character.defense <= 0) {
    return false
  }

  return true
}

export const performAttack = (attacker: createCharacter, defender: createCharacter, validator: (input: createCharacter) => boolean) => {
  if (!validator(attacker) || !validator(defender)) {
    throw new Error('Invalid character')
  }
  if (attacker.attack > defender.defense) {
    defender.vitality -= attacker.attack - defender.defense
  }
  if (attacker.attack < defender.defense) {
    attacker.vitality += attacker.attack - defender.defense
  }
  if(attacker.attack === defender.defense){
    attacker.vitality = attacker.vitality
    defender.vitality = defender.vitality
  }
}
