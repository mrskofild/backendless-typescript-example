import ApiKeysNames from 'app/constants/api-keys-names'

import init from 'app/backendless/app/init'

/**
 * @param {Object} app
 */
function initBackendless(app) {
  const { [ApiKeysNames.BL]: apiKey } = app.settings.apiKeysMap

  return init(app.id, apiKey, false)
}

export default initBackendless