import Item from 'models/item'
import Base from './base'

/**
 * @typedef {Base} List
 * @property {String} title
 * @property {Item[]} items
 */
class List extends Base {
  title: string
  items: Item[]
}

Backendless.Data.mapTableToClass('List', List)

Backendless.ServerCode.addType(List)

export default List