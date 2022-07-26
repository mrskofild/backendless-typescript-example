/* eslint-disable no-unused-vars */
import '../types/backendless_extension'

import { RELATIONS_PAGE_SIZE } from 'app/constants/base-model'
import { queryToBuilder } from 'utils/query'

const byObjectId = (value: string[] | string) => Array.isArray(value)
  ? `objectId in(${value})`
  : `objectId = '${value}'`

const queries = {
  byObjectId,
}

/**
 * @typedef {PersistenceItem} Base
 */
class Base extends Backendless.ServerCode.PersistenceItem {
  static queries = queries

  save(): Promise<this> {
    return super.save.call(this) as Promise<this>
  }

  static save<T extends Base>(
    this: { [P in keyof typeof Base]: typeof Base[P] } & (new (...args: any[]) => T),
    item: T
  ): Promise<T> {
    return super.save.call(this, item) as Promise<T>
  }

  static find<T extends Base>(
    this: {[P in keyof typeof Base]: typeof Base[P]} & (new (...args: any[]) => T),
    queryObj?: Backendless.DataQueryBuilder | string,
  ): Promise<T[]> {
    const query = queryToBuilder(queryObj)

    return super.find(query) as Promise<T[]>
  }

  async fetch(relations?: string[] | null, properties?: string[]): Promise<this> {
    const data = await super.fetch(relations, properties)

    Object.assign(this, data)

    return this
  }

  static remove<T extends Base>(
    this: {[P in keyof typeof Base]: typeof Base[P]} & (new (...args: any[]) => T),
    condition: T | string
  ): Promise<T[]> {
    return super.remove(condition)
  }

  static async findFirst<T extends Base>(
    this: {[P in keyof typeof Base]: typeof Base[P]} & (new (...args: any[]) => T),
    condition?: Backendless.DataQueryBuilder | string,
    relations?: string[] | null,
    properties?: string[]
  ): Promise<T | null> {
    const query = condition instanceof Backendless.DataQueryBuilder ?
      condition :
      queryToBuilder({ condition, properties, options: { relations } })

    if (!relations || !relations.length) {
      query.setPageSize(1)
    }


    if (relations && relations.length) {
      query.setRelationsPageSize(RELATIONS_PAGE_SIZE)
    }

    const [firstItem] = await this.find(query)

    return firstItem && new this(firstItem)
  }

  static async isExist(query: string): Promise<boolean> {
    const exist = await this.findFirst(query.toString(), null, ['objectId'])

    return Boolean(exist)
  }
}

Backendless.ServerCode.addType(Base)

export default Base