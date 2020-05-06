# If you see pwd_unknown showing up, this is why. Re-calibrate your system.
# PWD ?= pwd_unknown

# MAJOR?=0
# MINOR?=1

VERSION=$(MAJOR).$(MINOR)

APP_NAME = "system-toolbox"

# Our docker Hub account name
HUB_NAMESPACE = "danydodson"

# location of Dockerfiles
DOCKER_FILE_DIR = "dockerfiles"
DOCKERFILE = "${DOCKER_FILE_DIR}/Dockerfile"

IMAGE_NAME = "${APP_NAME}"
CUR_DIR = $(shell echo "${PWD}")

# PROJECT_NAME defaults to name of the current directory.
# should not to be changed if you follow GitOps operating procedures.
PROJECT_NAME = $(notdir $(PWD))

# Note. If you change this, you also need to update docker-compose.yml.
# only useful in a setting with multiple services/ makefiles.
SERVICE_TARGET := main

# if vars not set specifially: try default to environment, else fixed value.
# strip to ensure spaces are removed in future editorial mistakes.
# tested to work consistently on popular Linux flavors and Mac.
ifeq ($(user),)
# USER retrieved from env, UID from shell.
HOST_USER ?= $(strip $(if $(USER),$(USER),nodummy))
HOST_UID ?= $(strip $(if $(shell id -u),$(shell id -u),4000))
else
# allow override by adding user= and/ or uid=  (lowercase!).
# uid= defaults to 0 if user= set (i.e. root).
HOST_USER = $(user)
HOST_UID = $(strip $(if $(uid),$(uid),0))
endif

THIS_FILE := $(lastword $(MAKEFILE_LIST))
CMD_ARGUMENTS ?= $(cmd)

# export such that its passed to shell functions for Docker to pick up.
export PROJECT_NAME
export HOST_USER
export HOST_UID

# all our targets are phony (no files to check).
.PHONY: shell help build rebuild service login test clean prune

# suppress makes own output
#.SILENT:

# shell is the first target. So instead of: make shell cmd="whoami", we can type: make cmd="whoami".
# more examples: make shell cmd="whoami && env", make shell cmd="echo hello container space".
# leave the double quotes to prevent commands overflowing in makefile (things like && would break)
# special chars: '',"",|,&&,||,*,^,[], should all work. Except "$" and "`", if someone knows how, please let me know!).
# escaping (\) does work on most chars, except double quotes (if someone knows how, please let me know)
# i.e. works on most cases. For everything else perhaps more useful to upload a script and execute that.
shell:
ifeq ($(CMD_ARGUMENTS),)
	# no command is given, default to shell
	docker-compose -p $(PROJECT_NAME)_$(HOST_UID) run --rm $(SERVICE_TARGET) sh
else
	# run the command
	docker-compose -p $(PROJECT_NAME)_$(HOST_UID) run --rm $(SERVICE_TARGET) sh -c "$(CMD_ARGUMENTS)"
endif

# Regular Makefile part for buildpypi itself
help:
	@echo ''
	@echo 'Usage: make [TARGET] [EXTRA_ARGUMENTS]'
	@echo 'Targets:'
	@echo '  build    	build docker --image-- for current user: $(HOST_USER)(uid=$(HOST_UID))'
	@echo '  rebuild  	rebuild docker --image-- for current user: $(HOST_USER)(uid=$(HOST_UID))'
	@echo '  test     	test docker --container-- for current user: $(HOST_USER)(uid=$(HOST_UID))'
	@echo '  service   	run as service --container-- for current user: $(HOST_USER)(uid=$(HOST_UID))'
	@echo '  login   	run as service and login --container-- for current user: $(HOST_USER)(uid=$(HOST_UID))'
	@echo '  clean    	remove docker --image-- for current user: $(HOST_USER)(uid=$(HOST_UID))'
	@echo '  prune    	shortcut for docker system prune -af. Cleanup inactive containers and cache.'
	@echo '  shell      run docker --container-- for current user: $(HOST_USER)(uid=$(HOST_UID))'
	@echo ''
	@echo 'Extra arguments:'
	@echo 'cmd=:	make cmd="whoami"'
	@echo '# user= and uid= allows to override current user. Might require additional privileges.'
	@echo 'user=:	make shell user=root (no need to set uid=0)'
	@echo 'uid=:	make shell user=dummy uid=4000 (defaults to 0 if user= set)'

rebuild:
	# force a rebuild by passing --no-cache
	docker-compose build --no-cache $(SERVICE_TARGET)

service:
	# run as a (background) service
	docker-compose -p $(PROJECT_NAME)_$(HOST_UID) up -d $(SERVICE_TARGET)

login: service
	# run as a service and attach to it
	docker exec -it $(PROJECT_NAME)_$(HOST_UID) sh

build:
	# only build the container. Note, docker does this also if you apply other targets.
	docker-compose build $(SERVICE_TARGET)

clean:
	# remove created images
	@docker-compose -p $(PROJECT_NAME)_$(HOST_UID) down --remove-orphans --rmi all 2>/dev/null \
	&& echo 'Image(s) for "$(PROJECT_NAME):$(HOST_USER)" removed.' \
	|| echo 'Image(s) for "$(PROJECT_NAME):$(HOST_USER)" already removed.'

prune:
	# clean all that is not actively used
	docker system prune -af

# here it is useful to add your own customised tests
# test:
#   docker-compose -p $(PROJECT_NAME)_$(HOST_UID) run --rm $(SERVICE_TARGET) sh -c '\
# 	echo "I am `whoami`. My uid is `id -u`." && echo "Docker runs!"' \
# 	&& echo success


# ====================================================================================#




# ====================================================================================#


# stop:
# 	docker stop $(shell docker ps -aq)

# rm-all:
# 	docker rm $(shell docker ps -aq)

# rm-all-images:
# 	docker rmi -f $(shell docker images -q)

# nuke:
# 	make stop && make rm-all && make rm-all-images

# up:
# 	docker-compose -p seedlings up

# down:
# 	docker-compose down

# build:
# 	docker-compose -p seedlings up --build

# rebuild:
# 	make down && make build

# enter-api:
# 	docker exec -it seedlings_api_1 /bin/bash

# enter-frontend:
# 	docker exec -it seedlings_frontend_1 /bin/bash

# enter-mongo-express:
# 	docker exec -it seedlings_mongo-express_1 /bin/bash


# ====================================================================================#




# ====================================================================================#

# CLIENT COMMANDS #

# AWS_CLI_IMAGE_NAME=aws-cli
# AWS_CLI_CONTAINER_IMAGE_NAME=aws-cli

# # Run these on the machine you will be 
# # running the AWS CLI container from.

# aws-cli-build:
# 	docker build -t $(AWS_CLI_IMAGE_NAME) .

# aws-cli-run: aws-cli-build
# 	docker run --rm -it --name $(AWS_CLI_CONTAINER_IMAGE_NAME) $(AWS_CLI_IMAGE_NAME)