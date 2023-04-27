pipeline {
  agent any
    
  tools {nodejs "node"}
    
  stages {
        
    stage('Git') {
      steps {
        git 'https://github.com/DekoTheKing/github-actions.git'
      }
    }
     
    stage('Build') {
      steps {
        sh 'npm install --legacy-peer-deps'
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