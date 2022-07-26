import expect from 'test/utils/setup'

import buildItem from './build-item'
import ItemService from 'app/services/items'

async function creteItem() {
  const item = buildItem()

  const itemService = new ItemService()
  itemService.request = {
    context: {
      userToken: 'userToken',
    },
  }

  const newItem = await itemService.create(item)

  expect(newItem).to.have.property('name').to.equal(item.content)
  expect(newItem).to.have.property('completed').to.equal(item.completed)
  expect(newItem).to.have.property('objectId').to.be.a('string')

  return newItem
}

export default creteItem