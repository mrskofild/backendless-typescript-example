import Item from 'models/item'
import List from 'models/list'
import assert from 'utils/assert'

const ERR_ITEM_NOT_EXIST = 'List with specified id not exist'

async function validateItemId(listId: string) {
  assert(listId, 'List must have an objectId')

  const condition = List.queries.byObjectId(listId)

  const exist = await List.isExist(condition)

  assert(exist, ERR_ITEM_NOT_EXIST)
}

async function onUpdate(item: Item) {
  const { objectId } = item

  await validateItemId(objectId)
}

export {
  onUpdate,
  validateItemId
}