Heroku JS Runtime Env
=====================
Make single-page javascript apps (SPA) honor runtime environment variables.

Normally javascript apps are compiled into a bundle before being deployed. During this compile phase, environment variables may be embedded in the javascript bundle, such as with [Webpack DefinePlugin](https://webpack.github.io/docs/list-of-plugins.html#defineplugin). If you're hosting on a [12-factor](https://12factor.net) platform like [Heroku](https://www.heroku.com), these embedded values may go stale when setting new [config vars](https://devcenter.heroku.com/articles/config-vars), promoting through a [pipeline](https://devcenter.heroku.com/articles/pipelines), or [rolling back](https://devcenter.heroku.com/articles/releases#rollback) to a previous release.

In coordination with the build process, this tiny module provides a mechanism to inject runtime environment variables into a javascript bundle without recompiling.

Usage
-----

🚧 🚧 🚧
