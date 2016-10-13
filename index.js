// Capture environment as module variable to allow testing.
var originalEnv = process.env;
// This Mustache template tag should be rendered/replaced with the environment in production.
var templatedEnv = '{{REACT_APP_VARS_AS_JSON}}';


// A function returning the runtime environment, so that 
// JSON parsing & errors occur at runtime instead of load time.
function runtimeEnv() {
  var env;

  if (originalEnv.NODE_ENV === 'production') {
    try {
      env = JSON.parse(templatedEnv);
    } catch(error) {
      throw new Error(
        'Runtime env vars could not be parsed. '+
        'Content of `REACT_APP_VARS_AS_JSON` is `'+templatedEnv+'` '+
        'Ensure `node_modules/@mars/heroku-js-runtime-env/index.js` '+
        'is rendered as a Mustache template.'
      );
    }

  } else {
    env = originalEnv;
  }

  return env;
}

module.exports = runtimeEnv;