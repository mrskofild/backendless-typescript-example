import { isObject } from './object'

/**
 * @param {Object|String} query
 * @param {Function} [QueryBuilder]
 * @returns {Object}
 */
function queryToBuilder(query, QueryBuilder = Backendless.DataQueryBuilder): Backendless.DataQueryBuilder {
  if (query instanceof QueryBuilder) {
    return query
  }

  const queryBuilder = QueryBuilder.create()

  if (typeof query === 'string') {
    queryBuilder.setWhereClause(query)

    return queryBuilder
  }

  // when query equal to sql expression
  if (isObject(query) && query.nodes) {
    queryBuilder.setWhereClause(String(query))

    return queryBuilder
  }

  if (isObject(query)) {
    const { condition, properties, options } = query

    condition && (queryBuilder.setWhereClause(String(condition)))
    properties && (queryBuilder.setProperties(properties))

    if (options) {
      options.pageSize && (queryBuilder.setPageSize(options.pageSize))
      options.relationsPageSize && (queryBuilder.setRelationsPageSize(options.relationsPageSize))
      options.offset && (queryBuilder.setOffset(options.offset))
      options.relations && (queryBuilder.setRelated(options.relations))
      options.sortBy && (queryBuilder.setSortBy(options.sortBy))
      options.groupBy && (queryBuilder.setGroupBy(options.groupBy))
      options.havingClause && (queryBuilder.setHavingClause(options.havingClause))
      options.relationsDepth && (queryBuilder.setRelationsDepth(options.relationsDepth))
      options.distinct && (queryBuilder.setDistinct(options.distinct))
    }
  }

  return queryBuilder
}

/**
 * @param {DataQueryBuilder} query
 * @returns {DataQueryBuilder}
 */
function cloneQuery(query: Backendless.DataQueryBuilder): Backendless.DataQueryBuilder {
  const newQuery = Backendless.DataQueryBuilder.create()

  Object.assign(newQuery, query)

  return newQuery
}

export {
  queryToBuilder,
  cloneQuery
}