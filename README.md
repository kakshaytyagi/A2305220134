# Train Schedule Web App

This is a React-based web application for displaying train schedules. It interacts with a backend API to fetch train data and provides user-friendly interfaces for viewing train details and registration.

## Features

- Registration: Register a new company to obtain a client ID and client secret.
- Authentication: Obtain an access token for accessing protected API endpoints.
- View All Trains: Display a list of all available trains.
- View Single Train: View detailed information about a specific train.

## Technologies Used

- React: Frontend library for building user interfaces.
- React Router: Handling navigation and routing within the application.
- Axios: Making HTTP requests to the backend API.
- Express: Backend framework for building RESTful APIs.
- JWT: Handling authentication and authorization using JSON Web Tokens.

## Getting Started

1. Clone the repository.
2. Install dependencies: `npm install`
3. Start the frontend: `npm start`
4. Start the backend: `npm run start-server`

## Backend API Endpoints

- `POST /register`: Register a new company and receive client ID and client secret.
- `POST /auth`: Obtain an access token for API authentication.
- `GET /train/trains`: Get a list of all available trains.
- `GET /train/trains/:trainNumber`: Get details of a specific train.

## Environment Variables

- `PORT`: Port number for running the server (default: 3001).
- `SECRET_KEY`: Secret key for JWT authentication.
- `AUTH_TOKEN`: Access token for API authorization.

## Screenshots

![Register](/screenshots/register.png)
![Authentication](/screenshots/auth.png)
![List Available trains](/screenshots/ListAll.png)
![specific trains](/screenshots/specific.png)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

