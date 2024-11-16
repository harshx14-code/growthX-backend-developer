# Assignment Submission Portal

A simple backend system where **Users** can upload assignments and **Admins** can review and accept/reject them. Built with Node.js, Express, and MongoDB.

1. Models: The `User` and `Assignment` models are detailed, showing their structure and the purpose of each field. This section helps users understand how data is being stored.


2. Routes: This section provides a brief overview of the main API routes for both User and Admin actions. It explains what each route does and how they interact with the database.

 Table of Contents

- [Installation]
- [Environment Setup]
- [API Endpoints]
- [How to Run]

Installation Process on cmd prompt:


1. Install dependencies:
    ```bash
    npm install
    ```

2. Create a `.env` file in the project root and add your MongoDB connection string:
    ```plaintext
    MONGO_URI=mongodb://localhost:27017/assignment-portal
    ```

    *(Replace with your own MongoDB URI if needed)*

 Environment Setup

- `MONGO_URI`: The connection string for your MongoDB database.

 API Endpoints

 User Endpoints

- **POST /register**: Register a new user.
- **POST /login**: User login.
- **POST /upload**: Upload an assignment.
- **GET /admins**: Get a list of all admins.

 Admin Endpoints

- **POST /register**: Register a new admin.
- **POST /login**: Admin login.
- **GET /assignments**: Get assignments for the admin.
- **POST /assignments/:id/accept**: Accept an assignment.
- **POST /assignments/:id/reject**: Reject an assignment.

 How to Run

1. Ensure MongoDB is running on your machine or use MongoDB Atlas.
2. Run the server:
    ```bash
    node app.js
    ```
3. The server will be available at `http://localhost:5000`.

 Testing the API

Use Postman (reommended) or any API tool to test the following endpoints:

- **Register a User**:
    - **POST**: `http://localhost:5000/register`
    - **Body**:
      ```json
      {
        "username": "user1",
        "password": "password123"
      }
      ```

- **Login as User**:
    - **POST**: `http://localhost:5000/login`
    - **Body**:
      ```json
      {
        "username": "user1",
        "password": "password123"
      }
      ```

- **Upload an Assignment**:
    - **POST**: `http://localhost:5000/upload`
    - **Body**:
      ```json
      {
        "userId": "Soumik",
        "task": "Hello World",
        "admin": "Alok"
      }
      ```

- **View Assignments (Admin)**:
    - **GET**: `http://localhost:5000/assignments`

Contributing

Feel free to fork this repo and create a pull request for any improvements or bug fixes!

 License

This project is open-source and available under the MIT License.
