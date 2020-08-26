node("DOCKER") {
  try {
    stage('checkout') {
      sha = checkout(scm).GIT_COMMIT
    }

    stage('build') {
      sh 'docker-compose build'
    }

    stage('publish') {
      sh 'docker-compose push'
    }
  }
  catch (e) {
    subject = "${env.JOB_NAME} - Build # ${env.BUILD_NUMBER} - Failure!"
    body = "${env.JOB_NAME} - Build # ${env.BUILD_NUMBER} - Failure: Check console output at ${env.BUILD_URL} to view the results"
    author = sh(script: "git --no-pager show -s --format='%ae' ${sha}", returnStdout: true).trim()

    emailext (
        to: author,
        subject: subject,
        body: body,
        recipientProviders: [[$class: 'RequesterRecipientProvider']]
      )
    throw e
  }
}