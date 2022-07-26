import Item from 'models/item'
import { onUpdate as validate } from './validate'

async function updateItem(item: Item) {
  await validate(item)

  await item.save()

  return item
}

export default updateItem