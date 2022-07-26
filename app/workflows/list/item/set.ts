import Item from 'models/item'
import List from 'models/list'

import { onSet as validate } from './validate'

import createItem from 'workflows/item/create'

async function setItem(listId: string, item: Item) {
  await validate(listId, item)

  await createItem(item)

  const list = new List(listId)

  await list.addRelation('items', item)

  return item
}

export default setItem