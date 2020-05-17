#!/bin/sh

aws s3 sync build/ s3://seesee-platform-pwa --acl public-read --delete --profile dany
