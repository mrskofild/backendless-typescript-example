import List from 'models/list'

function getListById(listId: string) {
  const condition = List.queries.byObjectId(listId)

  return List.find(condition)
}

export default getListById