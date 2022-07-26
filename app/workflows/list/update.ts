import List from 'models/list'

import { onUpdate as validate } from './validate'

async function updateList(list: List) {
  await validate(list)

  await list.save()

  return list
}

export default updateList