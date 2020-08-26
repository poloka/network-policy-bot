const logger = require('./lib/logger')
const handlePullRequestChange = require('./lib/handlePullRequestChange')

module.exports = app => {
  logger.init(app.log)

  app.on(
    [
      'pull_request.opened',
      'pull_request.edited',
      'pull_request.labeled',
      'pull_request.unlabeled',
      'pull_request.synchronize'
    ], async context => {
      await handlePullRequestChange(context)
    }
  )
}
