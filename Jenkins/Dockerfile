FROM jenkins/jenkins:lts

USER root

RUN apt-get update && apt-get install -y docker.io ruby \
    && rm -rf /var/lib/apt/lists/* \
    && curl -L "https://github.com/docker/compose/releases/download/1.29.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose \
    && chmod +x /usr/local/bin/docker-compose \
    && ln -s /usr/local/bin/docker-compose /usr/bin/docker-compose

RUN groupmod -g 137 docker && usermod -a -G docker jenkins

USER jenkins