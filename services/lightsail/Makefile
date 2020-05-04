#####################
#  CLIENT COMMANDS  #
#####################

AWS_CLI_IMAGE_NAME=aws-cli
AWS_CLI_CONTAINER_IMAGE_NAME=aws-cli

# Run these on the machine you will be running the AWS CLI container from.

aws-cli-build:
	docker build -t $(AWS_CLI_IMAGE_NAME) .

aws-cli-run: aws-cli-build
	docker run --rm -it --name $(AWS_CLI_CONTAINER_IMAGE_NAME) $(AWS_CLI_IMAGE_NAME)
