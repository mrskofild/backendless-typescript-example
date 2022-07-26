import { initEnvironment } from 'test/utils/init-integration-test-environment'

import CreatedEntities from 'test/utils/created-entities'

import creteItem from './create-item'

const createdEntities = new CreatedEntities()

describe('services', () => {
  describe('discounts', () => {
    initEnvironment()

    afterEach(() => (
      createdEntities.remove()
    ))

    describe('create', () => {
      it('it should create a Item', async() => {
        const item = await creteItem()

        createdEntities.set('items', item)
      })
    })
  })
})