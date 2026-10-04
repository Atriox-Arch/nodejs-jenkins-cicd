pipeline {
    agent any

    stages {

        stage('Build') {
            steps {
                echo 'Building Docker image...'

                sh 'docker build -t nodejs-jenkins-app .'
            }
        }

        stage('Test') {
            steps {
                echo 'Running application tests...'

                sh 'docker run --rm nodejs-jenkins-app npm test'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploying application...'

                sh 'docker rm -f nodejs-jenkins-app || true'

                sh 'docker run -d --name nodejs-jenkins-app -p 3000:3000 nodejs-jenkins-app'
            }
        }
    }
}
