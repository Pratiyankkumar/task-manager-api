# Task Manager API

This is a RESTful API for managing tasks and users, developed using Node.js, Express, and MongoDB. The API supports CRUD operations for users and tasks, including user authentication, file uploads for user avatars, and task filtering.

## Base URL

The base URL for the API is: `https://task-manager-api-dmsf.onrender.com`


## Features

- **User Authentication**: Users can sign up, log in, log out, and manage their accounts.
- **Task Management**: Users can create, read, update, and delete tasks.
- **File Upload**: Users can upload and manage their profile avatars.
- **Task Filtering**: Filter tasks based on completion status, pagination, and sorting.

## API Endpoints

### User Endpoints

- **Create User**  
  **POST** `/users`  
  Create a new user.  
  **Example**:  
  `POST https://task-manager-api-dmsf.onrender.com/users`

- **Login**  
  **POST** `/users/login`  
  Log in a user.  
  **Example**:  
  `POST https://task-manager-api-dmsf.onrender.com/users/login`

- **Logout**  
  **POST** `/users/logout`  
  Log out the current user.  
  **Example**:  
  `POST https://task-manager-api-dmsf.onrender.com/users/logout`

- **Logout All**  
  **POST** `/users/logoutAll`  
  Log out from all sessions.  
  **Example**:  
  `POST https://task-manager-api-dmsf.onrender.com/users/logoutAll`

- **Get User Profile**  
  **GET** `/users/me`  
  Get the authenticated user's profile.  
  **Example**:  
  `GET https://task-manager-api-dmsf.onrender.com/users/me`

- **Update User**  
  **PATCH** `/users/me`  
  Update the authenticated user's profile.  
  **Example**:  
  `PATCH https://task-manager-api-dmsf.onrender.com/users/me`

- **Delete User**  
  **DELETE** `/users/me`  
  Delete the authenticated user.  
  **Example**:  
  `DELETE https://task-manager-api-dmsf.onrender.com/users/me`

- **Upload Avatar**  
  **POST** `/users/me/avatar`  
  Upload an avatar for the authenticated user.  
  **Example**:  
  `POST https://task-manager-api-dmsf.onrender.com/users/me/avatar`

- **Delete Avatar**  
  **DELETE** `/users/me/avatar`  
  Delete the authenticated user's avatar.  
  **Example**:  
  `DELETE https://task-manager-api-dmsf.onrender.com/users/me/avatar`

- **Get Avatar**  
  **GET** `/users/:id/avatar`  
  Get the avatar of a specific user.  
  **Example**:  
  `GET https://task-manager-api-dmsf.onrender.com/users/:id/avatar`

### Task Endpoints

- **Create Task**  
  **POST** `/tasks`  
  Create a new task.  
  **Example**:  
  `POST https://task-manager-api-dmsf.onrender.com/tasks`

- **Get Tasks**  
  **GET** `/tasks`  
  Get all tasks for the authenticated user. Supports filtering by completion status, pagination, and sorting.  
  **Example**:  
  `GET https://task-manager-api-dmsf.onrender.com/tasks`

- **Get Task by ID**  
  **GET** `/tasks/:id`  
  Get a task by its ID.  
  **Example**:  
  `GET https://task-manager-api-dmsf.onrender.com/tasks/:id`

- **Update Task**  
  **PATCH** `/tasks/:id`  
  Update a task by its ID.  
  **Example**:  
  `PATCH https://task-manager-api-dmsf.onrender.com/tasks/:id`

- **Delete Task**  
  **DELETE** `/tasks/:id`  
  Delete a task by its ID.  
  **Example**:  
  `DELETE https://task-manager-api-dmsf.onrender.com/tasks/:id`

## Setup

### Prerequisites

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/Pratiyankkumar/task-manager-api.git
    cd task-manager-api
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Set up environment variables:
    Create a `.env` file in the root directory and add the following:

    ```
    PORT=3000
    MONGODB_URL=your_mongodb_connection_string
    JWT_SECRET=your_jwt_secret
    GMAIL_APP_PASS=your_gmail_app_password
    ```

4. Start the server:
    ```bash
    npm run dev
    ```

    The API will be available at `http://localhost:3000`.

## Error Handling

The API returns appropriate HTTP status codes and error messages for invalid requests, authentication issues, and server errors.

## Technologies Used

- **Node.js**: JavaScript runtime.
- **Express**: Web framework for Node.js.
- **MongoDB**: NoSQL database.
- **Mongoose**: MongoDB object modeling for Node.js.
- **JWT**: JSON Web Tokens for user authentication.
- **Multer**: Middleware for handling file uploads.
- **Sharp**: Image processing library.
- **Nodemailer**: Email sending service.

## Important Note
Please wait for 60-120 seconds for the response of my API, beacuse i dont have money to deploy on a paid service

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.


