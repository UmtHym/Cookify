# Cookify

Cookify is a web application that allows users to browse, create, and save their favorite recipes. It includes user authentication, the ability to add and view recipes, and a personalized profile page to manage saved recipes. The app integrates Cloudinary for image hosting and Multer for file handling.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Configuration](#configuration)
- [Folder Structure](#folder-structure)
- [Technologies Used](#technologies-used)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Features

- User authentication (Sign up, Log in, Log out)
- Add, update, and delete recipes
- Save favorite recipes
- Profile page for managing saved recipes
- Recipe image uploads (using Multer and Cloudinary)
- Responsive and user-friendly UI

## Installation

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)
- [Cloudinary Account](https://cloudinary.com/) (for image hosting)

### Steps to Run the Project Locally

1. Clone the repository:

```bash
git clone https://github.com/your-username/Cookify.git
cd Cookify
```

2. Install dependencies:

```bash
npm install
```

3. Set up your environment variables by creating a .env file in the config directory. You need to configure the following:

```bash
PORT=5000
MONGO_URI=your_mongo_connection_string
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
SESSION_SECRET=your_session_secret
```

4. Run the application:

```bash
npm start
```

The app will be running on http://localhost:5000.

## Configuration

- Database: MongoDB is used for storing user data and recipes. The connection string is configured in the .env file.
- Cloudinary: Used for storing recipe images. Set up your Cloudinary credentials in the .env file.
- Session: The app uses a session for user authentication. The SESSION_SECRET in the .env file should be a strong, unique string.

## Folder Structure

```
└── 📁Cookify
    └── 📁config
        └── .env               # Environment variables
        └── database.js        # MongoDB connection
        └── passport.js        # Passport authentication setup
    └── 📁controllers
        └── auth.js            # Authentication logic
        └── home.js            # Home page logic
        └── recipe.js          # Recipe-related logic
    └── 📁middleware
        └── auth.js            # Middleware for authentication check
        └── cloudinary.js      # Middleware for Cloudinary image upload
        └── multer.js          # Middleware for file handling
    └── 📁models
        └── Favorite.js        # Favorite recipes model
        └── Recipe.js          # Recipe model
        └── User.js            # User model
    └── 📁public
        └── .DS_Store
        └── 📁css
            └── style.css     # Application styling
        └── 📁imgs
            └── favicon-32x32.png
            └── favicon.ico   # Favicon images
    └── 📁routes
        └── main.js            # Routes for the home page and general navigation
        └── recipe.js          # Routes for handling recipe-related actions
    └── 📁views
        └── favorites.ejs      # Template for the user's favorite recipes
        └── index.ejs          # Home page template
        └── login.ejs          # Login page template
        └── 📁partials
            └── footer.ejs    # Footer partial
            └── header.ejs    # Header partial
        └── profile.ejs        # User profile page template
        └── recipe.ejs         # Individual recipe page template
        └── signup.ejs         # Signup page template
    └── .gitignore             # Git ignore file
    └── package-lock.json      # Lockfile for dependencies
    └── package.json           # Project metadata and dependencies
    └── Procfile               # For Heroku deployment
    └── README.md              # Project documentation
    └── server.js              # Server setup and configuration

```

## Technologies Used

- Node.js: Server-side JavaScript runtime.
- Express: Web framework for building the server.
- MongoDB: NoSQL database for storing user data and recipes.
- Mongoose: ODM (Object Data Modeling) library for MongoDB and Node.js.
- Passport.js: Middleware for handling authentication.
- Cloudinary: Cloud storage service for recipe images.
- Multer: Middleware for handling multipart/form-data (used for file uploads).
- EJS: Templating engine for rendering dynamic HTML pages.
- CSS: Custom styles using style.css.

## Usage

- Sign Up / Log In: Users can create an account or log in using the authentication system.
- Browse Recipes: Users can view a list of recipes on the homepage and explore individual recipe details.
- Create a Recipe: Logged-in users can add new recipes by filling out a form, including uploading an image.
- Save Favorite Recipes: Users can mark recipes as favorites to view later on their profile page.

## Contributing

We welcome contributions to improve Cookify! If you want to contribute:

1. Fork the repository.
2. Create a new branch (git checkout -b feature-name).
3. Make your changes.
4. Commit your changes (git commit -am 'Add new feature').
5. Push to your branch (git push origin feature-name).
6. Create a new Pull Request.

## License

This project is open-source and available under the MIT License.
