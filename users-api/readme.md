# MEAN-user-auth

REST API app implementing user registration and authentication using passport,mongoDB and JWT.
Can be used with other apps needing basic user auth and sessions support
<br>
An [**Angular-6 based front end**](https://github.com/shawn-dsilva/angular-src-mean-user-auth) is in a seperate repo,but is present in this repo as a submodule


## Requirements

- NodeJs v8.x and npm
- MongoDB v3.x
- Port 3000 should be free
- (optional) Docker and `docker-compose`
## Running this server

- clone this repo with the` angular` submodule
```
git clone --recursive https://github.com/shawn-dsilva/mean-user-auth.git
```
- cd into `angular-src...` and run
```
npm install
```
then
```
ng build
```
this will put the compiled Angular files into your `public` directory,now `cd` back to root directory
```
cd ../
```
You should be back in `mean-user-auth` now

- run npm install to get all the packages for `mean-user-auth` :
```
npm install
```

- Chose which MongoDB you will be using, either a local installation or as a part of Docker image in `config/database.js`, by default this uses a Docker image
```js
 database: 'mongodb://mongo:27017/meanauth',
    //comment the above and comment out below if deploying locally WITHOUT Docker
    //database: 'mongodb://localhost:27017/meanauth',
```

- If Locally : Run the server,which will be on `localhost:3000`
```
 npm start
```

- If using Docker : Run docker-compose,which will create a container based on Nodejs v10 and download a MongoDB Docker container
```
docker-compose up
```

## CHANGES:
- Docker and docker-compose support **added**
- Git Submodule `angular-src-mean-user-auth` **added**
