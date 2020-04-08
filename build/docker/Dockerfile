FROM mcr.microsoft.com/vscode/devcontainers/javascript-node:0-12

ARG USERNAME=node
ARG USER_UID=1000
ARG USER_GID=$USER_UID

RUN if [ "$USER_GID" != "1000" ] || [ "$USER_UID" != "1000" ] then echo "" \ else groupmod --gid $USER_GID $USERNAME && usermod --uid $USER_UID --gid $USER_GID $USERNAME && chmod -R $USER_UID:$USER_GID /home/$USERNAME \ fi

ENV DEBIAN_FRONTEND=noninteractive
RUN apt-get update && apt-get -y install --no-install-recommends vim git ranger && apt-get autoremove -y && apt-get clean -y && rm -rf /var/lib/apt/lists/*
ENV DEBIAN_FRONTEND=dialog

USER $USER_UID
