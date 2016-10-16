// Capture environment as module variable to allow testing.
var compileTimeEnv;
try {
  compileTimeEnv = process.env;
} catch(error) {
  compileTimeEnv = {};
  console.log(
    '`process.env` is not defined. '+
    'Compile-time environment will be empty.'
  );
}
// This template tag should be rendered/replaced with the environment in production.
var templatedEnv = '{{REACT_APP_VARS_AS_JSON}}';


// A function returning the runtime environment, so that 
// JSON parsing & errors occur at runtime instead of load time.
function runtimeEnv() {
  var env;

  if (compileTimeEnv.NODE_ENV === 'production') {
    try {
      env = JSON.parse(templatedEnv);
    } catch(error) {
      env = {};
      console.error(
        'Runtime env vars cannot be parsed. '+
        'Content is `'+templatedEnv+'`'
      );
    }

  } else {
    env = compileTimeEnv;
  }

  return env;
}

module.exports = runtimeEnv;