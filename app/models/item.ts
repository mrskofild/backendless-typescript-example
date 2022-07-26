import Base from './base'

/**
 * @typedef {Base} Item
 * @property {String} content
 * @property {Boolean} completed
 */
class Item extends Base {
  content: string
  completed: boolean
}

Backendless.Data.mapTableToClass('Item', Item)

Backendless.ServerCode.addType(Item)

export default Item