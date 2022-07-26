import Item from 'models/item'

async function saveItem(item: Item) {
  await item.save()

  return item
}

export default saveItem