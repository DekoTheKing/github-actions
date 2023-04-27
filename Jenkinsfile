pipeline{
    agent {nodejs "node"}

    stages{
        stage('Build') {
            steps {
                git 'https://github.com/DekoTheKing/github-actions.git'
                bat 'npm install --legacy-peer-deps'
            }
        }
    }
}