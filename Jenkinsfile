
pipeline {
    agent any
    environment {
        AZURE_CREDENTIALS = 'demoAzure' // Use the credentials ID you created
        RESOURCE_GROUP = 'PFE'
        APP_NAME = 'First'
    }
    stages {
        stage('Checkout Code') {
            steps {
                git branch: 'main', url: 'https://github.com/SaberMefteh/demo.git'
            }
        }
        stage('Build Application') {
            steps {
                // Build steps will depend on your app (e.g., HTML, CSS, JavaScript)
                echo 'Skipping build steps for static HTML/CSS/JS.'
            }
        }
        stage('Deploy to Azure') {
            steps {
                withAzureCLI(credentialsId: "${AZURE_CREDENTIALS}") {
                    sh '''
                        az webapp deploy --resource-group ${RESOURCE_GROUP} --name ${APP_NAME} --src-path ./
                    '''
                }
            }
        }
    }
}
