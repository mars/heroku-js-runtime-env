var rewire = require('rewire')
var should = require('should')

describe('in production', function() {
  var runtimeEnv

  beforeEach(function() {
    runtimeEnv = rewire('../')
    runtimeEnv.__set__('originalEnv', { NODE_ENV: 'production'})
  })

  it('throws error when Mustache tag is not rendered', function() {
    runtimeEnv.should.throw(/Runtime env vars could not be parsed/)
  })

  describe('with Mustache template replacements', function() {
    beforeEach(function() {
      runtimeEnv.__set__('templatedEnv', '{ "REACT_APP_USER": "🦄"}')
    })

    it('contains value of the runtime environment', function() {
      runtimeEnv().should.be.an.instanceOf(Object).and.have.property('REACT_APP_USER', '🦄')
    })
  })

})
