var rewire = require('rewire')
var should = require('should')

describe('in development', function() {
  var runtimeEnv

  beforeEach(function() {
    runtimeEnv = rewire('../')
    runtimeEnv.__set__('compileTimeEnv', {
      NODE_ENV: 'development',
      REACT_APP_HELLO: 'world'
    })
  });

  it('contains value of `process.env`', function() {
    runtimeEnv().should.be.an.instanceOf(Object).and.have.property('REACT_APP_HELLO', 'world')
  })

})
