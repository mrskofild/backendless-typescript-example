import Base from './base'

import List from 'models/list'

import getAllLists from 'workflows/list/get/intex'
import getListById from 'workflows/list/get/by-id'
import createList from 'workflows/list/create'
import updateList from 'workflows/list/update'
import removeList from 'workflows/list/remove'
import Item from 'models/item'
import setItem from 'workflows/list/item/set'

class lists extends Base {
  /**
   * @description get all list
   * @route GET /
   */
  getAll() {
    return getAllLists()
  }

  /**
   * @description get list by id
   * @route GET /{listId}
   */
  getById() {
    const { listId } = this.request.pathParams

    return getListById(listId)
  }

  /**
   * @description create list
   * @param {List} list
   * @route POST /
   */
  create(list: List) {
    return createList(list)
  }


  /**
   * @description set item to list
   * @param {Item} item
   * @route POST /{list}
   */
  setItem(item: Item) {
    const { listId } = this.request.pathParams

    return setItem(listId, item)
  }

  /**
   * @description update list
   * @param {List} list
   * @route PUT /
   */
  update(list: List) {
    return updateList(list)
  }

  /**
   * @description delete list by id
   * @route DELETE /{listId}
   */
  remove() {
    const { listId } = this.request.pathParams

    return removeList(listId)
  }
}

Backendless.ServerCode.addService(lists)

export default lists