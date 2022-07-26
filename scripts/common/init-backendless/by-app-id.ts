import getApp from '../get/app'
import initBackendless from './by-app'

/**
 * @param appId
 * @returns {Promise<void>}
 */
async function initBackendlessByAppId(appId: string) {
  const app = await getApp(appId)

  initBackendless(app)
}

export default initBackendlessByAppId