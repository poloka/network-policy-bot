module.exports = handlePullRequestChange

const logger = require('./logger')

async function handlePullRequestChange (context) {
  const { pull_request: pr, repository: repo } = context.payload
  const timeStart = Date.now()
  const log = logger.create('handle_pull_request')

  const timeEnd = `${Date.now() - timeStart}ms`
  log.info(`total time: ${timeEnd}`)
}
