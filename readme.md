## Setup and deploy application Platform as a Service to AWS Lightsail

![x](/.assets/paas.jpg)

<br />
Required to complete.

- [x] aws lightsail
- [x] docker
- [x] ubuntu
- [x] node



### :point_right: Start the nginx reverse proxy container.
##

Run the [nginx-proxy](https://hub.docker.com/r/jwilder/nginx-proxy/dockerfile/ ) :package: .

```sh
sudo docker run --detach \
  --name nginx-proxy \
  --publish 80:80 \
  --publish 443:443 \
  --volume /etc/nginx/certs \
  --volume /etc/nginx/vhost.d \
  --volume /usr/share/nginx/html \
  --volume /var/run/docker.sock:/tmp/docker.sock:ro \
  jwilder/nginx-proxy
```


Start the [letsencrypt companion ](https://hub.docker.com/r/jrcs/letsencrypt-nginx-proxy-companion/) :package: .

```sh
sudo docker run --detach \
  --name nginx-proxy-letsencrypt \
  --volumes-from nginx-proxy \
  --volume /var/run/docker.sock:/var/run/docker.sock:ro \
  --env "DEFAULT_EMAIL=foo@bar.baz" \
  jrcs/letsencrypt-nginx-proxy-companion
```

Start a demo  server under a subdomain.

```sh
sudo docker run --detach \
  --name nginx \
  --env "VIRTUAL_HOST=test.foo.bar>" \
  --env "LETSENCRYPT_HOST=test.foo.bar" \
  nginx
```

<br />

### :point_right: Setup testing under a subdomain.
##

Clone [nginx-local-tunnel](https://github.com/danydodson/nginx-local-tunnel) :file_folder: to local pc.

```sh
git clone https://github.com/danydodson/nginx-local-tunnel
```

Change directory to cloned repo.

```sh
cd nginx-local-tunnel
```

Build the dev-proxy container.

```sh
docker build -t danydodson/dev-proxy:0.1 . --build-arg ROOTPW=<PASSWORD>
```

Start the proxy container. Note <span style="color:green">**2222**</span> is the port we opened on the instance earlier.

```sh
docker run --detach -p 2222:22 \
  --name dev-proxy \
  --env "VIRTUAL_HOST=dev.foo.bar" \
  --env "LETSENCRYPT_HOST=dev.foo.bar" \
  danydodson/dev-proxy:0.1
```

##

:electric_plug: Ports explained.

<span style="color:green">**4000**</span> Is from tunnel.conf If you changed that also change below.  
<span style="color:green">**3000**</span> Refers to the port your app is running on localhost.  
<span style="color:green">**2222**</span> Is tyhe fowarded port on the host that we use to directly ssh into the container.
##

From a different shell ssh into domain.

`ssh -NR :80:localhost:3000 -p 2222 root@foo.bar`

Point :computer: to [https://dev.foo.bar](https://dev.foo.bar).

<br />

### :point_right: Setup automatic deploy.
## 

Clone this sample [express-hello](https://github.com/danydodson/express-hello) :file_folder: to local pc.

```sh
git clone https://github.com/danydodson/express-hello
```

Create a docker hub repo and connect to express-hello.  

Once complete docker will watch for commits to this repo and build a new image with the tag 'latest' in response.  

Once the image is available. Start the container like so:

```sh
docker run --detach \
  --name app \
  --env "VIRTUAL_HOST=app.seesee.space" \
  --env "LETSENCRYPT_HOST=app.seesee.space" \
  danydodson/express-hello
```

Lastly, Use [watchtower](https://hub.docker.com/r/containrrr/watchtower) to poll dockerhub and update the <span style="color:green">'app'</span> container whenever a new image is detected:

```sh
docker run -d \
  --name watchtower \
  -v /var/run/docker.sock:/var/run/docker.sock \
  containrrr/watchtower \
  --interval 10 \
  app
```

### :point_right: Summary
##

Our PaaS is now complete!  
As long as we deploy new containers and add the VIRTUAL_HOST and LETSENCRYPT_HOST environment variables,  
we get automatic subdomain routing and SSL termination. With SSH reverse tunneling, we can develop on our local  
dev machine using our favorite IDE and test/share our app at https://dev.foo.bar. And since it's a public URL with SSL,  
we can test Alexa Skills, GitHub Webhooks, CORS settings, PWAs, and anything else that requires SSL. Once we're happy  
with our changes, a git commit will trigger an automated rebuild  of our docker image, which gets automatically redeployed  
by Watchtower.

### :point_right: Contact
## 

:globe_with_meridians: [dany.codes](https://dany.codes "Blog/Portfolio of Dany Dodson")  
:e-mail: [danydodson](mailto:dany@dany.codes)  
