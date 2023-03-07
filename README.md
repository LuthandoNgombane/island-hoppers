This app is a Blog app, a visitor can view all posts about Greek Islands. By registering you become a user and therefore have the ability to sign in and write your own posts as well as edit and delete you own posts. There is also an admin sign in that can create, edit and delete its own admin posts but can also edit and delete users posts.


------------------------------------------------------------------------------------------------------------------------------------------------


### `npm install `
Once you have opened the project you will need to install node_modules in both the api and the client directories by using the 'npm install' command

### `npm start`

Once nodule modules are installed you change directory to the api directory and ender the command 'npm start' runs the app in the development mode. These steps should be also be repeated in the client directory.
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

If you wish test the app then ' npm test' aunches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `Helmet`

The app uses Helmet to provide data secruity 

### `MongoDB URI`
The MongoDB URI can be modifly in the index.js in the  api directory 
mongoose
  .connect("*"


------------------------------------------------------------------------------------------------------------------------------------------------


## Preface:

This software requirements document is intended for the developers, stakeholders, and project managers involved in the development of the Island Hoppers blog website. It outlines the requirements, specifications, and standards for the website, which will allow visitors to see blogs about Greek Islands and search for blogs by island name and user name. Admin will be able to access all posts and be able to edit and delete posts as required.

This is the first version of this document

## Introduction:

The Island Hoppers blog website was created to provide a platform for users to share their experiences and knowledge about the various Greek Islands. The website is designed to be user-friendly and easy to navigate and an easy-to-use account creation process. The website is intended to be used by tourists and travel enthusiasts who are interested in learning more about the Greek Islands and planning their next vacation.

## Glossary:

The following terms are used throughout this document and are defined as follows:

User: A person who visits the Island Hoppers blog website and has the ability to search for blogs, create an account, and create and edit their own blog posts.

Admin: A special type of user who has the ability to access, edit, and delete all information on the Island Hoppers blog website.

Blog Post: A written article that is submitted by a user to the Island Hoppers blog website, describing their experiences and knowledge about a particular Greek Island.

User Requirements Definition:

The following services will be provided for the users of the Island Hoppers blog website:

Search: Users will be able to search for blog posts by island name and user name.

Account Creation: Users will be able to create an account using their email address.

Blog Creation: Users will be able to create, edit, and delete their own blog posts.

Account Management: Users will be able to update and delete their account information.



## User Requirements Definition:

# Services provided for the user:

View blogs about Greek Islands
Search for blogs by island name and user name
Log in using email
Create, edit, and delete their own posts
Update and delete their account

# Non-Functional Requirements:

Usability: The website must be easy to use and navigate.
Performance: The website must load quickly and efficiently, even during periods of high traffic.
Security: User data must be protected, and the website must be secure against potential security threats.
Product and process standards:
All code must be well-documented and easy to maintain.
The website must be compatible with modern web browsers.


## System architecture:
The Island Hoppers website will be developed using the MERN stack technology. The system architecture will consist of the following components:
ReactJS for the front-end user interface. NodeJS and ExpressJS for the back-end server. MongoDB for the database
The system architecture will allow for the separation of the front-end and back-end components, making it easier to maintain and update in the future. The website will be hosted on a cloud-based platform to ensure high availability and fast load times.
 
## System requirements specification 

# Functional Requirements:

View blogs: Users must be able to view all blogs about Greek Islands that have been posted on the website.
Search for blogs: Users must be able to search for blogs by island name and user name.
Login: Users must be able to log in to the website using their email address..
Create posts: Once logged in, users must be able to create their own blog posts.
Edit posts: Users must be able to edit their own posts.
Delete posts: Users must be able to delete their own posts.
Update account: Users must be able to update their account information.
Delete account: Users must be able to delete their account.
Admin access: An admin account must be able to access, edit, and delete all information on the website.


# Non-Functional Requirements:

Usability: The website must be easy to use and navigate.
Performance: The website must load quickly and efficiently, even during periods of high traffic.
Security: User data must be protected, and the website must be secure against potential security threats.


## System models:
See flow diagram and wireframes


## System evolution:

Island Hoppers is based upon users experiences of their visits to the Greek Islands therefore the site could evolve to include:
Info on local beaches, bars, restaurants, hotels, places to stay and tourist attractions etc
Info on how to get to the island including where to book ferries

## Appendices:
Island Hoppers uses MongoDB as a database

## Index:
Considering the size if the document an index is not required however larger document would require one.

