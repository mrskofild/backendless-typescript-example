import fs from 'fs'
import path from 'path'

import defaultConfig from '../config/default.json'

const DEFAULT_ENV = 'develop'
const ENV = process.env.NODE_ENV || DEFAULT_ENV

// eslint-disable-next-line @typescript-eslint/no-var-requires
const envConfig = require(`../config/${ENV}`)

const config = Object.assign(defaultConfig, envConfig)

config.CLIENT_PORT = process.env.CLIENT_PORT || config.CLIENT_PORT
config.CLIENT_HOST = process.env.CLIENT_HOST || config.CLIENT_HOST

const targetPath = path.resolve(__dirname, '../app/config')
/* eslint-disable no-sync*/
fs.writeFileSync(`${targetPath}/config.json`, JSON.stringify(config))