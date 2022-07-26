import { getClient } from '../client'

async function getSettings(appId: string) {
  const client = await getClient()

  return client.settings.getAppSettings(appId)
}

export default getSettings