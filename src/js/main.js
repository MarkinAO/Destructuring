export default function getSpecialAttacks(object) {
  if(!object) {
    throw new Error('Функция вызвана без объекта!')
  }
  let result = []

  object.special.forEach(el => {
    const {id, name, icon, description = 'Описание недоступно'} = el
    result.push({id, name, icon, description})
  })
  
  return result
}
