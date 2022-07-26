import Item from 'models/item'

async function removeItem(itemId: string) {
  await Item.remove(itemId)
}

export default removeItem