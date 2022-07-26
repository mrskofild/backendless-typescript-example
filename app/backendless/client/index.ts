import { createClient } from 'backendless-console-sdk';
import config from '../../config';

let client = null

async function initClient() {
  const { CONSOLE_SERVER_URL, CONSOLE_USER_EMAIL, CONSOLE_USER_PWD } = config
  const newClient = createClient(CONSOLE_SERVER_URL)

  await newClient.user.login(CONSOLE_USER_EMAIL, CONSOLE_USER_PWD)

  return client = newClient
}

async function getClient() {
  if (client) {
    return client
  }

  return initClient()
}

export {
  getClient
}