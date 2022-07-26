import assert from 'assert'

const ERR_NON_AUTHORIZED = 'You must be authenticated to use this endpoint.'


class BaseService {
  authOnly = false
  response
  __request

  get request(): any {
    return this.__request
  }

  set request(request) {
    this.__request = request

    this.onRequestInit()
  }

  /**
   * runs on each new request to service
   */
  onRequestInit() {
    if (this.authOnly) {
      this.ensureUserIsAuthenticated()
    }
  }

  /**
   * Checks if user is authenticated.
   */
  ensureUserIsAuthenticated() {
    const { userToken } = this.request.context

    assert(userToken, ERR_NON_AUTHORIZED)
  }

  /**
   * Returns true if user is authenticated
   */
  isAuthenticated() {
    const { userToken } = this.request.context

    return userToken ? true : false
  }
}

export default BaseService