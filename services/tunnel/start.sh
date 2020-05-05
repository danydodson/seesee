
# build with password
docker build -t danydodson/proxy-tunnel . --build-arg ROOTPW=password

# run from local computer
ssh -NR :80:localhost:3000 -p 2222 root@YOURDOMAIN.tld
