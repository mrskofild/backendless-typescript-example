/* eslint-disable */

import sinon from 'sinon'
import 'scripts/init-coderunner-env'

// import config from 'app/config'
import * as backendlessClientModule from 'app/backendless/client'
import * as backendlessSettingsModule from 'app/backendless/app/get-settings'

import initBackendless from 'scripts/common/init-backendless/by-app-id'

import ApiKeysNames from 'app/constants/api-keys-names'

let tablesData: Record<string, any[]> = {}

class PersistenceItem {

  constructor(args) {

    if (typeof args === 'string') {
      args = { objectId: args }
    }

    Object.assign(this, args)
  }

  get _mokeData() {
    return tablesData[(this as any).name] || []
  }

  static get _mokeData() {
    return tablesData[this.name] || []
  }

  fetch(relations, properties) {
    return this._mokeData
  }

  save() {
    return this
  }

  saveWithRelations(options = {}) { }

  ref(...propsToInclude) { }

  remove() { }

  setRelation(columnName, childrenOrWhereClause) { }

  addRelation(columnName, childrenOrWhereClause) { }

  deleteRelation(columnName, childrenOrWhereClause) { }

  get dataStore() {
    return {}
  }

  static get dataStore() {
    return {}
  }

  static count(condition) {
    return this._mokeData.length
  }

  static save(obj) { }

  static saveWithRelations(obj, opts) { }

  static find(query) {
    return this._mokeData
  }

  static findById(objectId, relations, properties) {
    return this._mokeData.find(item => item.objectId === objectId)
  }

  static findFirst() {
    return this._mokeData[0]
  }

  static findLast() {
    return this._mokeData[this._mokeData.length - 1]
  }

  static remove(obj) { }

  static bulkCreate(items: any[]) {
    this._mokeData.push(...items)
  }

  static bulkUpdate(whereClause, changes) { }

  static bulkDelete(whereClause) { }
}

export function initEnvironment() {
  beforeEach(async () => {
    sinon.stub(backendlessClientModule, 'getClient').returns(Promise.resolve({}))
    sinon.stub(backendlessSettingsModule, 'default').returns(Promise.resolve({
      apiKeysMap: {
        [ApiKeysNames.BL]: 'test-bl-key',
        [ApiKeysNames.REST]: 'test-rest-key'
      }
    }))

    await initBackendless('test-app-id-key')

    Object.getOwnPropertyNames(Backendless.ServerCode.PersistenceItem).forEach((prop: any) => {
      const isFunction = typeof Backendless.ServerCode.PersistenceItem[prop] === 'function'

      if (Object.getOwnPropertyNames(PersistenceItem).includes(prop)) {
        if (isFunction) {
          sinon.stub(Backendless.ServerCode.PersistenceItem, prop).calledWith(PersistenceItem[prop])
        } else {
          sinon.stub(Backendless.ServerCode.PersistenceItem, prop).returns(PersistenceItem[prop])
        }
      } else {
        if (isFunction) {
          sinon.stub(Backendless.ServerCode.PersistenceItem, prop).calledWith(sinon.spy())
        } else {
          sinon.stub(Backendless.ServerCode.PersistenceItem, prop).returns(null)
        }
      }
    })


    Object.getOwnPropertyNames(Backendless.ServerCode.PersistenceItem.prototype).forEach((prop: any) => {
      const isFunction = typeof Backendless.ServerCode.PersistenceItem.prototype[prop] === 'function'

      if (Object.getOwnPropertyNames(PersistenceItem.prototype).includes(prop)) {
        if (isFunction) {
          sinon.stub(Backendless.ServerCode.PersistenceItem.prototype, prop).callsFake(PersistenceItem.prototype[prop])
        } else {
          sinon.stub(Backendless.ServerCode.PersistenceItem.prototype, prop).returns(PersistenceItem.prototype[prop])
        }
      } else {
        if (isFunction) {
          sinon.stub(Backendless.ServerCode.PersistenceItem.prototype, prop).callsFake(sinon.spy())
        } else {
          sinon.stub(Backendless.ServerCode.PersistenceItem.prototype, prop).returns(null)
        }
      }
    })

  })

  afterEach(() => {
    sinon.restore()
  })

  after(() => {
    sinon.restore()
  })
}