export interface createCharacter {
  name: string,
  vitality: number,
  defense: number,
  attack: number
}

export const validateCharacter = (
  character: createCharacter
): boolean => {
  if(!character.name || character.vitality === undefined || character.attack === undefined || character.defense === undefined){
    return false
  }
  if(character.vitality <= 0 || character.attack <= 0 || character.defense <= 0){
    return false
  }

  return true
}

