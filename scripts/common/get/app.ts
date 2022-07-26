import getAppSettings from 'app/backendless/app/get-settings'

/**
 * @param {string} id
 * @returns {Promise<{settings, id: *}>}
 */
async function getApp(id) {
  return {
    id,
    settings: await getAppSettings(id)
  }
}

export default getApp