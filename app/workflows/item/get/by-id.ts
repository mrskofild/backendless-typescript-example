import Item from 'models/list'

function getItemById(itemId: string) {
  const condition = Item.queries.byObjectId(itemId)

  return Item.find(condition)
}

export default getItemById