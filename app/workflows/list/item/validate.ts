import Item from 'models/item'

import { validateListId } from 'workflows/list/validate'

async function onSet(listId: string, item: Item) {
  await validateListId(listId)
}

export {
  onSet,
}