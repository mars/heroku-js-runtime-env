var rewire = require('rewire')
var should = require('should')

describe('in development', function() {
  var runtimeEnv

  beforeEach(function() {
    runtimeEnv = rewire('../')
    runtimeEnv.__set__('originalEnv', { NODE_ENV: 'development'})
  });

  it('contains value of `process.env`', function() {
    runtimeEnv().should.be.an.instanceOf(Object).and.have.property('NODE_ENV')
  })

})
