import 'backendless-coderunner/lib'

import config from 'app/config'

Backendless.serverURL = (config as any).serverURL
Backendless.ServerCode.addType = type => type

global.Backendless = Backendless