import List from 'models/list'

function buildList() {
  return new List({
    title: 'List test',
  })
}

export default buildList