FROM python:3.6.1-slim

RUN apt-get update \
    && apt-get upgrade -y \
    && apt-get install -y make nano wget jq git vim \
    && apt-get autoremove -y \
    && apt-get clean -y \
    && rm -rf /var/lib/apt/lists/*

RUN pip install pip awscli --upgrade

RUN echo "\ncomplete -C '/usr/local/bin/aws_completer' aws\naws configure && source /usr/src/app/make_completion.sh" >> /root/.bashrc

WORKDIR /usr/src/app

COPY resources /usr/src/app

CMD ["bash"]
