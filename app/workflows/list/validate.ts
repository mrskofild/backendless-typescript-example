import List from 'models/list'
import assert from 'utils/assert'

const ERR_LIST_NOT_EXIST = 'List with specified id not exist'

async function validateListId(listId: string) {
  assert(listId, 'List must have an objectId')

  const condition = List.queries.byObjectId(listId)

  const exist = await List.isExist(condition)

  assert(exist, ERR_LIST_NOT_EXIST)
}

async function onUpdate(list: List) {
  const { objectId } = list

  await validateListId(objectId)
}

export {
  onUpdate,
  validateListId
}