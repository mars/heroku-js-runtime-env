// Capture environment as module variable to allow testing.
var originalEnv = process.env;
// This template tag should be rendered/replaced with the environment in production.
var templatedEnv = '{{REACT_APP_VARS_AS_JSON}}';


// A function returning the runtime environment, so that 
// JSON parsing & errors occur at runtime instead of load time.
function runtimeEnv() {
  var env;

  if (originalEnv.NODE_ENV === 'production') {
    try {
      env = JSON.parse(templatedEnv);
    } catch(error) {
      console.error(
        'Runtime env vars cannot be parsed. '+
        'Content is `'+templatedEnv+'`'
      );
    }

  } else {
    env = originalEnv;
  }

  return env;
}

module.exports = runtimeEnv;