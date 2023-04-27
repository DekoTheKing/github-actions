pipeline {
  agent any
    
  tools {nodejs "NodeJS"}
    
  stages {
        
    stage('Git') {
      steps {
        git 'https://github.com/DekoTheKing/github-actions.git'
      }
    }
     
    stage('Build') {
      steps {
        bat 'npm install --legacy-peer-deps'
        //  sh '<<Build Command>>'
      }
    }  
    
            
    // stage('Test') {
    //   steps {
    //     sh 'node test'
    //   }
    // }
  }
}
