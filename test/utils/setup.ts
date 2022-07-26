import chai from 'chai'
import assertArrays from 'chai-arrays'
import chaiMatchPattern from 'chai-match-pattern'
import dirtyChai from 'dirty-chai'
import sinonChai from 'sinon-chai'
import asPromised from 'chai-as-promised'
import chaiHttp from 'chai-http'

chai.use(assertArrays)
chai.use(asPromised)
chai.use(chaiMatchPattern)
chai.use(sinonChai)
chai.use(dirtyChai)
chai.use(chaiHttp)
chai.should()

export {
  chai
}

export default chai.expect