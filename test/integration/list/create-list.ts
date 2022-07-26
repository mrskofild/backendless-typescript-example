import expect from 'test/utils/setup'

import buildList from './build-list'
import ListService from 'app/services/lists'

async function creteList() {
  const list = buildList()

  const listService = new ListService()
  listService.request = {
    context: {
      userToken: 'userToken',
    },
  }

  const newItem = await listService.create(list)

  expect(newItem).to.have.property('title').to.equal(list.title)
  expect(newItem).to.have.property('objectId').to.be.a('string')

  return newItem
}

export default creteList