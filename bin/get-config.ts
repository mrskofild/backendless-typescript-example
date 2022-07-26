import defaultConfig from '../config/default.json'

function getConfig(env) {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const envConfig = require(`../config/${env}`)

  const config = Object.assign(defaultConfig, envConfig)

  config.CLIENT_PORT = process.env.CLIENT_PORT || config.CLIENT_PORT
  config.CLIENT_HOST = process.env.CLIENT_HOST || config.CLIENT_HOST

  return config
}

export default getConfig