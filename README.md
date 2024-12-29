# Recipe App

A full-stack web application built to help users manage and share their favorite recipes. This app allows users to create, view, and edit recipes, upload images, and manage their account. The app utilizes MongoDB for data storage, Cloudinary for image management, Passport.js for authentication, and integrates various other technologies for a smooth user experience.

---

## Table of Contents

- [Technologies](#technologies)
- [Features](#features)
- [Setup Instructions](#setup-instructions)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

---

## Technologies

- **Frontend**:
  - React
  - React Router
  - Axios (for HTTP requests)
  - TailwindCSS (for styling)
- **Backend**:
  - Node.js
  - Express.js
  - MongoDB (with Mongoose for schema modeling)
  - Cloudinary (for image hosting and management)
  - Passport.js (for user authentication)
  - Bcrypt (for password hashing)
- **Others**:
  - dotenv (for environment variable management)
  - Nodemon (for auto-restarting the server during development)

---

## Features

- **User Authentication**:
  - Sign up with email and password.
  - Login to access and manage your profile.
  - Logout functionality.
- **Recipe Management**:

  - Create, read, update, and delete recipes.
  - Upload and display recipe images using Cloudinary.
  - Each recipe includes ingredients, instructions, and category labels.

- **Responsive Design**:

  - Fully responsive user interface optimized for both desktop and mobile views.

- **Data Storage**:
  - MongoDB database for storing user information, recipes, and image URLs.
  - Mongoose for managing database schemas.

---

## Setup Instructions

1. **Clone the repository**:

   ```bash
   git clone <repository-url>
   cd Recipe-App
   ```

2. **Install dependencies**:

   Run this command to install backend and frontend dependencies:

   ```bash
   npm install
   ```

3. \*\*Set up environment variables:

Create a .env file in the root of your project with the following keys:

```bash
MONGO_URI=<Your-MongoDB-URI>
CLOUDINARY_URL=<Your-Cloudinary-URL>
SESSION_SECRET=<Your-Session-Secret>
JWT_SECRET=<Your-JWT-Secret>
GOOGLE_CLIENT_ID=<Your-Google-Client-ID>
GOOGLE_CLIENT_SECRET=<Your-Google-Client-Secret>
```

4. \*\*Run the app:

• Start the backend server:

```bash
npm run dev
```

• Start the frontend:

```bash
npm run start
```

The app should now be running on `http://localhost:3000` (or another specified port).

## API Endpoints

### User Routes

- `POST /signup`: Create a new user.
- `POST /login`: Log in an existing user.
- `GET /profile`: View the logged-in user’s profile.
- `GET /logout`: Log out the user.

### Recipe Routes

- `GET /recipes`: Fetch all recipes.
- `POST /recipes`: Create a new recipe (requires authentication).
- `GET /recipes/:id`: View a specific recipe.
- `PUT /recipes/:id`: Edit an existing recipe (requires authentication).
- `DELETE /recipes/:id`: Delete a recipe (requires authentication).

## Contributing

We welcome contributions! Please fork the repository and submit a pull request with your changes.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature-name`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature-name`)
5. Create a new Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

The app should now be running on http://localhost:3000 (or another specified port).
