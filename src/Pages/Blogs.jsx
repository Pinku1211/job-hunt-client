import React from 'react';
import { Helmet } from 'react-helmet-async';

const Blogs = () => {
    return (
        <div>
            <Helmet>
                <title>JobHunt | Blogs</title>
            </Helmet>

            <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">

                <div class="max-w-2xl mx-auto mb-10 lg:mb-14">
                    <h2 class="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">Q & A</h2>
                </div>


                <div class="max-w-2xl mx-auto divide-y divide-gray-200 dark:divide-gray-700">
                    <div class="py-8 first:pt-0 last:pb-0">
                        <div class="flex gap-x-5">
                            <svg class="flex-shrink-0 mt-1 w-6 h-6 text-gray-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10" /><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" /><path d="M12 17h.01" /></svg>

                            <div>
                                <h3 class="md:text-lg font-semibold text-gray-800 dark:text-gray-200">
                                    Access token:
                                </h3>
                                <p class="mt-1 text-gray-500">

                                    A temporary token used to get access to a particular resource or service on behalf of a user is called an access token.

                                    Once a user has successfully authenticated, it is issued by an authentication server (such as the OAuth 2.0 authorization server).

                                    Because they often last only a few minutes or hours, access tokens are less likely to be compromised.

                                    Each time a request is made to a protected resource, an access token is provided along with it. This enables the resource server to confirm the user's identity and permissions without requiring repetitive user authentication.

                                    They usually contain the user's details, the extent of access, and an expiration date.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="py-8 first:pt-0 last:pb-0">
                        <div class="flex gap-x-5">
                            <svg class="flex-shrink-0 mt-1 w-6 h-6 text-gray-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10" /><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" /><path d="M12 17h.01" /></svg>

                            <div>
                                <h3 class="md:text-lg font-semibold text-gray-800 dark:text-gray-200">
                                    Refresh token:
                                </h3>
                                <p class="mt-1 text-gray-500">
                                    When the current access token expires, a refresh token—a long-lived token—is used to get new ones.
                                    Additionally, the authentication server issues it to users upon their login or application authorization. Usually, refresh tokens have a longer validity time (days to months).
                                    The client can request a new access token via a refresh token after an existing one expires, saving the user from having to log in again.
                                    Because they have a longer lifespan than access tokens, refresh tokens are more sensitive and should be stored securely.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="py-8 first:pt-0 last:pb-0">
                        <div class="flex gap-x-5">
                            <svg class="flex-shrink-0 mt-1 w-6 h-6 text-gray-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10" /><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" /><path d="M12 17h.01" /></svg>

                            <div>
                                <h3 class="md:text-2xl font-semibold text-gray-800 dark:text-gray-200">
                                    How they work:
                                </h3>
                                <p class="mt-1 text-gray-500">
                                    <em className='font-bold'> Flow of Access Tokens:</em>
                                    After the user authorizes the program or logs in, the client application sends out an authentication request.
                                    An access token is provided by the authentication server and given back to the client.

                                    Every time the client sends a request to the resource server, it includes the access token.

                                    Based on the permissions contained in the access token, the resource server verifies the token and grants or refuses access. <br />

                                    <em className='font-bold'> Flow of Refresh Token:</em>

                                    The client uses the refresh token to ask the authentication server for a new access token when the current one expires.

                                    If the refresh token is legitimate, the authentication server validates it and generates a new access token.

                                    Through this method, the client can get new access tokens without having to interact with the user. <br />
                                    <em className='font-bold'>Storage on the client side:</em> Access tokens should be kept in a safe location away from possible threats, yet easily accessible for transmission with API calls. Access tokens are frequently kept in HTTP-only cookies, browser memory (such as JavaScript variables or sessionStorage), or a secure client-side storage system like Web Storage.
                                    Because refresh tokens are so important, they ought to be kept in a more secure location—ideally, not on the client side. While access tokens are saved on the client-side, refresh tokens are often stored in secure server-side storage.
                                    In order to safeguard access and refresh tokens on the client-side and prevent unauthorized access to resources or accounts, it is imperative that appropriate security measures and best practices be followed. The selection of a storage device
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="py-8 first:pt-0 last:pb-0">
                        <div class="flex gap-x-5">
                            <svg class="flex-shrink-0 mt-1 w-6 h-6 text-gray-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10" /><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" /><path d="M12 17h.01" /></svg>

                            <div>
                                <h3 class="md:text-2xl font-semibold text-gray-800 dark:text-gray-200">
                                    Express:
                                </h3>
                                <p class="mt-1 text-gray-500">
                                    Express.js is a popular web application framework for Node.js. It is minimal and flexible, providing a robust set of features for building web and mobile applications. Express simplifies the process of building web applications by providing a set of middleware and routing mechanisms, which help you define how your application should respond to HTTP requests. Key features of Express.js include:

                                    Routing: Express allows you to define routes and their associated handlers to handle different HTTP requests (GET, POST, etc.) for various URL paths.

                                    Middleware: Express supports middleware functions that can be used for tasks such as logging, authentication, data parsing, and error handling.

                                    Template Engines: It allows you to use various template engines like EJS, Handlebars, or Pug to render dynamic HTML content.

                                    Static File Serving: You can serve static files (e.g., images, CSS, JavaScript) using built-in middleware.

                                    REST API Development: Express is commonly used to build RESTful APIs because of its routing and middleware capabilities.

                                    Integration: It can be easily integrated with other libraries and frameworks to create full-stack web applications.

                                    Express.js is known for its simplicity and flexibility, making it a popular choice for building web applications and APIs in Node.js.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="py-8 first:pt-0 last:pb-0">
                        <div class="flex gap-x-5">
                            <svg class="flex-shrink-0 mt-1 w-6 h-6 text-gray-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10" /><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" /><path d="M12 17h.01" /></svg>

                            <div>
                                <h3 class="md:text-2xl font-semibold text-gray-800 dark:text-gray-200">
                                    Next Js:
                                </h3>
                                <p class="mt-1 text-gray-500">
                                    Nest.js is a modern, server-side framework for building scalable and maintainable web applications. It is built on top of Express.js and is designed to make it easier to create robust and efficient applications, especially in the context of building APIs and microservices. Key features of Nest.js include:

                                    Modularity: Nest.js encourages the use of modules, decorators, and dependency injection to organize and structure your application in a clean and maintainable way.

                                    TypeScript: Nest.js is built with TypeScript, which provides strong typing and tooling for building scalable applications.

                                    Decorators: It uses decorators extensively for defining routes, middleware, and more, making it easy to set up routing and validation.

                                    Dependency Injection: Nest.js uses dependency injection for managing application components, which promotes reusability and testability.

                                    WebSockets: It supports WebSockets for building real-time features in your application.

                                    CLI Tools: Nest.js provides a command-line interface (CLI) for generating boilerplate code and application setup.

                                    Middleware and Guards: Similar to Express, Nest.js supports middleware and guards for handling requests and controlling access to resources.

                                    Nest.js is often chosen when building complex applications with a structured, maintainable, and scalable architecture. It's especially popular in the enterprise and microservices world, but it can be used for various types of web applications as well.

                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="py-8 first:pt-0 last:pb-0">
                        <div class="flex gap-x-5">
                            <svg class="flex-shrink-0 mt-1 w-6 h-6 text-gray-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10" /><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" /><path d="M12 17h.01" /></svg>

                            <div>
                                <h3 class="md:text-2xl font-semibold text-gray-800 dark:text-gray-200">
                                    Explaination of my code:
                                </h3>
                                <p class="mt-1 text-gray-500">
                                    <span className='text-xl font-bold'>Front-End (React):</span><br />

                                    <em>User Authentication: </em>

                                    Implemented user registration and login functionality using Firebase Authentication. Firebase provides pre-built UI components to make this process easier.
                                    Job Listings:

                                    Fetched job listings from a MongoDB database or an external API.
                                    Display job listings to users in a clean and organized manner, with search and filter options.
                                    Allow users to apply for jobs and save job listings. <br />
                                    <em>JWT Authorization: </em>

                                    After a user logs in, generate a JWT to authenticate and authorize requests made to the server. <br />
                                    <em>User Experience: </em> 

                                    Ensure an intuitive and responsive user interface for seamless navigation and interaction.
                                    Implement features like job search, sorting, and job application management.<br />
                                    <span className='text-xl font-bold'>Back-End (Node.js/Express.js with MongoDB):</span> <br />

                                    <em>Server Setup: </em>

                                    Set up a Node.js server using Express.js.
                                    Configure routes for user registration, login, and profile management.<br />
                                    <em>MongoDB Database: </em> 

                                    Create a MongoDB database to store user data, job listings, and application history.
                                    Define data models for users, job listings, and applications.<br />
                                    <em>JWT Implementation: </em> 

                                    Create middleware to authenticate and authorize requests using JWT tokens.
                                    Verify JWT tokens on protected routes to ensure user access to specific resources.<br />
                                    <em>Job Listings API:</em> 

                                    Implement API endpoints to fetch job listings, create job listings (admin-only), and handle user job applications.<br />
                                    <em>Firebase Integration: </em> 

                                    Use Firebase for user authentication, and synchronize user accounts with your MongoDB database.
                                    Optionally, implement Firebase Storage for file uploads (e.g., resumes).<br />
                                    <em>Security and Data Privacy:</em> 

                                    Secure JWT: Ensure that JWTs are securely generated, transmitted, and verified to prevent unauthorized access.

                                    Firebase Security Rules: Configure Firebase Security Rules to restrict access to user data and ensure privacy.

                                    Validation and Sanitization: Implement server-side validation and data sanitization to protect against common security vulnerabilities, such as SQL injection and cross-site scripting (XSS).<br />
                                    <em>Deployment: </em> 

                                    Deployed the front-end application using a service like firebase.

                                    Deployed the back-end server to the vercel.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Blogs;