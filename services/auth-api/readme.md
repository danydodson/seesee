# Authentication and Authorization

Microservices architecture has been gaining a lot of ground as the preferred architecture for implementing solutions, as it provides benefits like scalability, logical and physical separation, small teams managing a part of the functionality, flexibility in technology, etc. But since microservices are distributed the complexity of managing them increases.

One of the key challenges is how to implement authentication and authorization in microservices so that we can manage security and access control.

In this post, we will try to explore a few approaches that are available and see how we should implement them.

There are three approaches that we can follow:

## Local Authentication and Authorization (Microservices are responsible for Authentication and Authorization)

#### Pros
Different authentication mechanisms can be implemented for each microservice.
Authorization can be more fine-grained

#### Cons
The code gets bulkier.
The probability of each service using different authentication is very low so code gets duplicated.
The developer needs to know the permission matrix and should understand what each permission will do.
The probability of making mistakes is quite high.

## Global Authentication and Authorization (It is an All or Nothing approach if the authorization for a service is there then it is accessible for all else none)

#### Pros
Authentication and authorization so there's no repetition of code.
A future change to the authentication mechanism is easy, as there's only one place to change the code.
Microservices' code is very light and focuses on business logic only.

#### Cons
Microservices have no control over what the user can access or not, and finer level permissions cannot be granted.
Failure is centralized and will cause everything to stop working.

## Global Authentication and Authorization as a part of Microservices

#### Pros
Fine-grained object permissions are possible, as microservices can decide what user the will see or not.
Global authentication will be easier to manage the lighter the load becomes.
Since authorization is controlled by the respective microservice there's no network latency and it will be faster.
No centralized failure for authorization.

#### Cons
Slightly more code for developers to write, as they have to focus on permission control.
Needs some effort to understand what you can do with each permission.
In my opinion, the third option is the best one, as most of the applications have a common authentication mechanism, thus global authentication makes perfect sense. Microservices can be accessed from multiple applications and clients and they might have different data needs so global authorization becomes a limiting factor on what each application can see. With local authorization, microservices can make sure that the client application is only authorized to see what it needs to see.

![auth](https://i.ibb.co/ZzSwMRV/auth-auth.png)

My organization implemented the same approach in one of the projects that we were working on recently. We built an authentication service that was mainly responsible for integration with the LDAP system for verifying the user and then contacting the RBAC (Role-Based Access Control) service to populate the permission matrix based on the role the user is playing in the context of the application, e.g. the same user can be a normal user in one of the applications and an admin in another. So we need to understand the context from which the user is coming in and RBAC is the place where we decode the context and populate the relevant set of permissions. The permission matrix was then sent to the microservice as a part of claims in the JWT token. Microservices only apply to those permissions and return what is required to be returned. Please see the below diagram to see how we orchestrate the flow.

The above solution, where authentication is global and microservices control the authorizations of their content based on the permissions that are passed to it, is one of the possible solutions for handling authentication and authorization modules in microservices development. Also, we can enhance this solution by building a sidecar in a service mesh-type architecture, where we offload the authorization to the sidecar.  

<!--

deps: express dotenv cors



dev-deps: eslint jest nodemon rimraf webpack-node-externals webpack webpack-cli @babel/core @babel/preset-env @babel/polyfill babel-loader babel-plugin-module-resolver



-->