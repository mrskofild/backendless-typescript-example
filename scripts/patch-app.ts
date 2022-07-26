import './init-coderunner-env'

import initBackendless from './common/init-backendless/by-app-id'

async function patchApp(appId, patch) {
  const patchLabel = `Patch of app ${appId}`

  console.time(patchLabel)

  try {
    await patch(appId)
  } catch (error) {
    console.error(`Error while the async call ${patch.name}`)
    console.error(error)
  }

  console.timeEnd(patchLabel)
}

async function run(appId, patchFileName) {
  console.time('Patch App')

  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const patch = require(`./patches/${patchFileName}`)
  await initBackendless(appId)

  await patchApp(appId, patch)

  console.timeEnd('Patch App')
}

export default run