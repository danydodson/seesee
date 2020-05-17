#!/bin/sh

deployment_dir=/opt/seesee/gateway-client

if [ -d "$deployment_dir" ] && [ -x "$deployment_dir" ]; then
  
  cd /opt/seesee/gateway-client
  
  rm -rf *

fi