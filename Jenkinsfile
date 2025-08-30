pipeline {
    agent any

    environment {
        DOCKER_USER = credentials('dockerhub-username')
        DOCKER_PASS = credentials('dockerhub-password')
        BACKEND_IMAGE = "${DOCKER_USER}/backend_app"
        FRONTEND_IMAGE = "${DOCKER_USER}/frontend_app"
        COMMIT_TAG = "${env.GIT_COMMIT}"
    }

    stages {
        stage('Build Images') {
            steps {
                echo "Building backend and frontend images..."
                sh "docker-compose build backend frontend"
            }
        }

        stage('Start Services') {
            steps {
                echo "Starting backend and frontend services..."
                sh "docker-compose up -d backend frontend"
            }
        }

        stage('Run Backend Tests') {
            steps {
                echo "Running backendtest..."
                sh "docker-compose run --rm backendtest"
            }
        }

        stage('Run Frontend Tests') {
            steps {
                echo "Running frontendtest..."
                sh "docker-compose run --rm frontendtest"
            }
        }

        stage('Push to Docker Hub') {
            when {
                branch 'main'
            }
            steps {
                echo "Pushing images to Docker Hub..."
                sh "echo $DOCKER_PASS | docker login -u $DOCKER_USER --password-stdin"
                sh "docker tag backend_app ${BACKEND_IMAGE}:${COMMIT_TAG}"
                sh "docker tag frontend_app ${FRONTEND_IMAGE}:${COMMIT_TAG}"
                sh "docker push ${BACKEND_IMAGE}:${COMMIT_TAG}"
                sh "docker push ${FRONTEND_IMAGE}:${COMMIT_TAG}"
                sh "docker tag ${BACKEND_IMAGE}:${COMMIT_TAG} ${BACKEND_IMAGE}:latest"
                sh "docker tag ${FRONTEND_IMAGE}:${COMMIT_TAG} ${FRONTEND_IMAGE}:latest"
                sh "docker push ${BACKEND_IMAGE}:latest"
                sh "docker push ${FRONTEND_IMAGE}:latest"
            }
        }
    }

    post {
        always {
            echo "Cleaning containers and images..."
            sh "docker-compose down"
        }

        success {
            echo "Pipeline completed successfully"
        }

        failure {
            echo "Pipeline failed"
        }
    }
}
