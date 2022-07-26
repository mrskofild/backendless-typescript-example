import sinon from 'sinon'

import { initEnvironment } from 'test/utils/init-unit-test-environment'

import expect from 'test/utils/setup'

import * as moduleItemValidation from 'workflows/item/validate'

import Item from 'models/item'

import updateItem from 'workflows/item/update'


describe('workflows', () => {
  describe('item', () => {
    describe('update', () => {
      initEnvironment()

      afterEach(() => {
        sinon.restore()
      })

      it('return updated item', async() => {
        sinon.stub(moduleItemValidation, 'onUpdate').returns(Promise.resolve())

        const item = new Item({
          objectId : 'itemId',
          name     : 'Item 1',
          completed: false,
        })

        const savedItem = await updateItem(item)

        expect(item).to.be.deep.equal(savedItem)
      })
    })
  })
})