import Item from 'models/list'

function getItem() {
  return Item.find()
}

export default getItem