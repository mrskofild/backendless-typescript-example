import 'app/types/backendless_extension.ts'

import 'backendless-coderunner/lib'

import config from './config'

Backendless.serverURL = config.serverURL
Backendless.ServerCode.addType = type => type

global.Backendless = Backendless