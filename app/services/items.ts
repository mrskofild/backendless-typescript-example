import Base from './base'

import Item from 'models/item'

import getAllItems from 'workflows/item/get/intex'
import getItemById from 'workflows/item/get/by-id'
import createItem from 'workflows/item/create'
import updateItem from 'workflows/item/update'
import removeItem from 'workflows/item/remove'

class items extends Base {
  /**
   * @description get all item
   * @route GET /
   */
  getAll() {
    return getAllItems()
  }

  /**
   * @description get item by id
   * @route GET /{itemId}
   */
  getById() {
    const { itemId } = this.request.pathParams

    return getItemById(itemId)
  }

  /**
   * @description create item
   * @param {Item} item
   * @route POST /
   */
  create(item: Item) {
    return createItem(item)
  }

  /**
   * @description update item
   * @param {Item} item
   * @route PUT /
   */
  update(item: Item) {
    return updateItem(item)
  }

  /**
   * @description delete item by id
   * @route DELETE /{itemId}
   */
  remove() {
    const { itemId } = this.request.pathParams

    return removeItem(itemId)
  }
}

Backendless.ServerCode.addService(items)

export default items