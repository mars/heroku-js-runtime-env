var rewire = require('rewire')
var should = require('should')

describe('in production', function() {
  var runtimeEnv

  beforeEach(function() {
    runtimeEnv = rewire('../')
    runtimeEnv.__set__('compileTimeEnv', { 
      NODE_ENV: 'production',
      REACT_APP_USER: '🐼'
    })
  })

  describe('with runtime env JSON', function() {
    beforeEach(function() {
      runtimeEnv.__set__('runtimeEnv', '{ "REACT_APP_USER": "🦄"}')
    })

    it('contains value of the runtime environment', function() {
      runtimeEnv().should.be.an.instanceOf(Object).and.have.property('REACT_APP_USER', '🦄')
    })
  })

  describe('when runtime env JSON cannot be parsed', function() {

    it('does not throw error (writes to error log)', function() {
      runtimeEnv().should.be.an.instanceOf(Object)
    })

    it('does not contain value from the compile-time environment', function() {
      runtimeEnv().should.not.have.property('REACT_APP_USER')
    })
  })

})
