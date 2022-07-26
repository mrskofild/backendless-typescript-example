import Item from 'models/item'

function buildItem() {
  return new Item({
    content  : 'test',
    completed: false,
  })
}

export default buildItem