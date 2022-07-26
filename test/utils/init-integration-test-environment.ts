import 'scripts/init-coderunner-env'

import config from 'app/config'

import initBackendless from 'scripts/common/init-backendless/by-app-id'

export function initEnvironment() {
  before(async() => {
    await initBackendless(config.APP_ID)
  })
}