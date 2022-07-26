import _get from 'lodash/get'
import _set from 'lodash/set'

class CreatedEntities {
  _entities: { [serviceName: string]: any[] }

  constructor() {
    this._entities = {}
  }

  set(serviceName, ...entities: Backendless.ServerCode.PersistenceItem[]) {
    const length = _get(this._entities, `${serviceName}.length`, 0)

    entities.forEach(entity => (
      _set(this._entities, `${serviceName}[${length}]`, entity)
    ))
  }

  async remove() {
    await Promise.all(Object.values(this._entities).map(async entities => {
      const Class = entities[0].constructor as typeof Backendless.ServerCode.PersistenceItem

      await Class.bulkDelete(entities)
    }))

    this._entities = {}
  }
}


export default CreatedEntities