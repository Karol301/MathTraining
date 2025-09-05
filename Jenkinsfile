pipeline {
    agent any

    environment {
        BACKEND_IMAGE = "backend_mathtraining"
        FRONTEND_IMAGE = "frontend_mathtraining"
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
                echo "Running backend tests..."
                sh "docker-compose run --rm backendtest"
            }
        }

        stage('Run Frontend Tests') {
            steps {
                echo "Running frontend tests..."
                sh "docker-compose run --rm frontendtest"
            }
        }

        stage('Push to Docker Hub') {
            when {
                branch 'main'
            }
            steps {
                withCredentials([usernamePassword(credentialsId: 'dockerhub-credentials',
                                                 usernameVariable: 'DOCKER_USER',
                                                 passwordVariable: 'DOCKER_PASS')]) {
                    echo "Pushing images to Docker Hub..."
                    sh """
                      echo "${DOCKER_PASS}" | docker login -u "${DOCKER_USER}" --password-stdin
                      docker tag backend_app ${DOCKER_USER}/${BACKEND_IMAGE}:${COMMIT_TAG}
                      docker tag frontend_app ${DOCKER_USER}/${FRONTEND_IMAGE}:${COMMIT_TAG}
                      docker push ${DOCKER_USER}/${BACKEND_IMAGE}:${COMMIT_TAG}
                      docker push ${DOCKER_USER}/${FRONTEND_IMAGE}:${COMMIT_TAG}
                      docker tag ${DOCKER_USER}/${BACKEND_IMAGE}:${COMMIT_TAG} ${DOCKER_USER}/${BACKEND_IMAGE}:latest
                      docker tag ${DOCKER_USER}/${FRONTEND_IMAGE}:${COMMIT_TAG} ${DOCKER_USER}/${FRONTEND_IMAGE}:latest
                      docker push ${DOCKER_USER}/${BACKEND_IMAGE}:latest
                      docker push ${DOCKER_USER}/${FRONTEND_IMAGE}:latest
                    """
                }
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
