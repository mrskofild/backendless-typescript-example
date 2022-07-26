import List from 'models/list'

async function removeList(listId) {
  await List.remove(listId)
}

export default removeList