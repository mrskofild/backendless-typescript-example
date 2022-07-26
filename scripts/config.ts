import codeRunnerConfig from '../coderunner.json'

const config = {
  serverURL: codeRunnerConfig.backendless.apiServer,
  appId    : codeRunnerConfig.app.id,
  apiKey   : codeRunnerConfig.app.apiKey,
}

export default config