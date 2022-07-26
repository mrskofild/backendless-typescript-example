import config from '../../config'
import backendless from 'backendless'

const { API_SERVER_URL } = config

/**
 * @param {string} appId
 * @param {string} apiKey
 * @param {boolean} [standalone]
 * @returns {*}
 */
function init(appId: string, apiKey: string, standalone = true) {
  // It needed when start script or path
  const Backendless = global.Backendless || backendless

  if (API_SERVER_URL) {
    Backendless.serverURL = API_SERVER_URL
  }

  return Backendless.initApp({
    appId,
    apiKey,
    standalone
  })
}

export default init