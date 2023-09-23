# MERN Blog Application

This is a MERN (MongoDB, Express.js, React, Node.js) stack blog application that allows users to perform CRUD (Create, Read, Update, Delete) operations on blog posts. The application also includes user authentication, allowing registered users to create and edit their own blog posts. It uses the Fetch API for communication with the server and manages state using React Context.

## Table of Contents

- [Technologies Used](#technologies-used)
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [Contributing](#contributing)
- [License](#license)

## Technologies Used

- **Frontend:**
  - React: A JavaScript library for building user interfaces.
  - React Router DOM: For handling client-side routing.
  - Ant Design: A popular UI framework for React applications.
  - React Icons: A library for including SVG icons in React applications.
  - Quill: A rich text editor for creating and editing blog posts.
  - Tailwind CSS: A utility-first CSS framework.
- **Backend:**
  - Express.js: A web application framework for Node.js.
  - MongoDB: A NoSQL database for storing blog posts and user data.
  - Mongoose: A MongoDB object modeling tool.
  - Passport.js: For user authentication and authorization.

## Features

- User Authentication:
  - User registration and login with password hashing for security.
  - User authentication using JWT (JSON Web Tokens).
- Blog Posts:
  - Create, Read, Update, and Delete (CRUD) operations on blog posts.
  - Rich text editor (Quill) for creating and editing blog posts.
- User Profile:
  - Users can create and update their profiles with personal information.
- UI Design:
  - Beautiful and responsive UI using Ant Design and Tailwind CSS.
  - Icons provided by React Icons.

## Getting Started

Follow these steps to set up and run the MERN Blog Application on your local machine.

### Prerequisites

- Node.js and npm installed on your machine.
- MongoDB installed and running.
- API key for Quill, if you want to customize the rich text editor features.

### Installation

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/rameezqazi23/MERN-blog-app.git
   cd mern-blog-app

   The application should now be running on http://localhost:3000/.
   ```

##Usage
Open your web browser and navigate to http://localhost:3000/.

Register a new user account or log in if you already have one.

Once logged in, you can create, edit, and delete blog posts.

Visit your profile page to update your personal information.

Enjoy creating and managing your blog posts!

Folder Structure
The project structure is organized as follows:

lua
Copy code
mern-blog-app/
|-- backend/
| |-- controllers/
| |-- models/
| |-- routes/
| |-- config.js
| |-- server.js
|-- frontend/
| |-- src/
| |-- components/
| |-- context/
| |-- pages/
| |-- App.js
| |-- index.js
|-- .env
|-- .gitignore
|-- package.json
|-- README.md
backend/: Contains the Express.js server, controllers, models, and routes for the backend.
frontend/: Contains the React frontend application.
.env: Environment variables for configuration.
package.json: Lists dependencies and scripts for running the application.
Contributing
Feel free to contribute to this project by creating issues, suggesting improvements, or submitting pull requests. Follow the CONTRIBUTING.md guidelines for more details.


