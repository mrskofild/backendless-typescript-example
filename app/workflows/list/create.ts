import List from 'models/list'

async function createList(list: List) {
  await list.save()

  return list.fetch()
}

export default createList