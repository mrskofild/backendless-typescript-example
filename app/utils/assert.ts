import assert from 'assert'
import format from 'string-template'


function assertWithTemplate(value, template = '', options = {}) {
  if (!template || !template.length) {
    console.log('Assertion Warning: error-message template is missed.')

    console.log(value, template, options)
  }

  const message = format(template, options)

  assert(value, message)
}

export default assertWithTemplate