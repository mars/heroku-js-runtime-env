var rewire = require('rewire')
var should = require('should')

describe('in production', function() {
  var runtimeEnv

  beforeEach(function() {
    runtimeEnv = rewire('../')
    runtimeEnv.__set__('originalEnv', { NODE_ENV: 'production'})
  })

  it('continues when env JSON is not rendered (writes to error log)', function() {
    runtimeEnv.should.not.throw()
  })

  describe('with env JSON', function() {
    beforeEach(function() {
      runtimeEnv.__set__('templatedEnv', '{ "REACT_APP_USER": "🦄"}')
    })

    it('contains value of the runtime environment', function() {
      runtimeEnv().should.be.an.instanceOf(Object).and.have.property('REACT_APP_USER', '🦄')
    })
  })

})
