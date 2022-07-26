import List from 'models/list'

function getAllLists() {
  return List.find()
}

export default getAllLists