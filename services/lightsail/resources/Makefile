########################
#  LIGHTSAIL COMMANDS  #
########################

INSTANCE_NAME=lightsail-ubuntu

# Once you've run `aws configure` or configured your AWS environment, here are 
# some basic commands to get you going.

# Copy and adapt for your own usage.

# originally --bundle-id 'micro_1_0'
create-instance:
	aws lightsail create-instances \
        --instance-names '$(INSTANCE_NAME)-vm' \
        --availability-zone 'us-east-1a' \
        --blueprint-id 'ubuntu_18_04' \
        --bundle-id 'nano_2_0' \
        --user-data file://'configure.sh'

open-port:
	aws lightsail open-instance-public-ports --instance-name $(INSTANCE_NAME)-vm --port-info fromPort=$(PORT),toPort=$(PORT),protocol=tcp

attach-static-ip:
	aws lightsail allocate-static-ip --static-ip-name $(INSTANCE_NAME)-ip
	aws lightsail attach-static-ip --instance-name $(INSTANCE_NAME)-vm --static-ip-name $(INSTANCE_NAME)-ip
	aws lightsail get-static-ip --static-ip-name $(INSTANCE_NAME)-ip

get-instances:
	aws lightsail get-instances

get-active-names:
	aws lightsail get-active-names

delete-instance:
	aws lightsail delete-instance --instance-name $(INSTANCE_NAME)-vm