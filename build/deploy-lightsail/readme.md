# Lightsail Docker

Experiment with Lightsail instances that install Docker.

*NOTE:* This is for educational purposes primarily. If you'd like to adapt it for production use, you're more than welcome.

## Requirements

- Docker
- GnuMake

## Step 1 - Create an IAM user with a suitable Lightsail policy

AWS (at time of writing) does not supply a pre-built policy for Lightsail so you can use the very simple policy included.

1. Create the Lightsail IAM policy (`lightsail-iam.json`).
1. Create an IAM user that has CLI access, attaching the Lightsail IAM policy you created.

*NOTE:* For production usage, you would want to refine the allowable actions.

## Step 2 - Run the AWS CLI container

THis creates an ephermeral container so will call aws-configure for you. You may want to create your own `docker run` command if that doesn't suit.

    make aws-cli-run

## Step 3 - Create a lightsail instance

Now that you're inside the AWS CLI container and have entered your access details, you're ready to create lightstail instances.

    make create-instance INSTANCE_NAME=lightsail-docker-awesomeness

    ## Some time passes..

    ## Get a list of instances created
    make get-instances

    # Or the list with just the names only (handy for when you want to delete)
    make get-active-names

    # Clean-up
    make delete-instance INSTANCE_NAME=lightsail-docker-awesomeness

## Step 4 - Make your Lightsail instances do awesome stuff

This part is up to you. Below are some useful resources to continue learning about Lightsail.

- [AWS Lightsail Docs](https://lightsail.aws.amazon.com/ls/docs/all) (They are good!)
- [AWS CLI Lightsail reference](http://docs.aws.amazon.com/cli/latest/reference/lightsail/index.html)
- [Code Snippets](https://codegists.com/code/aws-lightsail-iam/)
