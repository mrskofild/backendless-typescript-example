import { initEnvironment } from 'test/utils/init-integration-test-environment'

import CreatedEntities from 'test/utils/created-entities'

import buildItem from '../item/build-item'
import creteList from './create-list'
import ListService from 'app/services/lists'

import expect from 'test/utils/setup'

const createdEntities = new CreatedEntities()

describe('services', () => {
  describe('discounts', () => {
    initEnvironment()

    afterEach(() => (
      createdEntities.remove()
    ))

    describe('create', () => {
      it('it should create a list', async() => {
        const list = await creteList()

        createdEntities.set('lists', list)
      })
    })

    describe('create', () => {
      it('it should create a list', async() => {
        const list = await creteList()

        const listService = new ListService()
        listService.request = {
          context: {
            userToken: 'userToken',
          },
          pathParams: {
            listId: list.objectId,
          }
        }

        const item = buildItem()

        const savedItem = await listService.setItem(item)

        expect(savedItem).to.have.property('objectId').to.be.a('string')

        createdEntities.set('lists', list)
      })
    })
  })
})