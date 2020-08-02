import isDocker from 'is-docker'

let USERS_SERVICE, PROFILES_SERVICE, POSTS_SERVICE

if (isDocker()) {
  USERS_SERVICE = 'http://users_service:5000/api/user'
  PROFILES_SERVICE = 'http://profiles_service:6000/api/profiles'
  POSTS_SERVICE = 'http://posts_service:7000/api/posts'
}

if (!isDocker()) {
  USERS_SERVICE = 'http://localhost:5000/api/user'
  PROFILES_SERVICE = 'http://localhost:6000/api/profiles'
  POSTS_SERVICE = 'http://localhost:7000/api/posts'
}

export {
  USERS_SERVICE,
  PROFILES_SERVICE,
  POSTS_SERVICE,
}