# Full Stack Real-time Chat Application Documentation

## Getting Started

### Download and Setup
1. **Clone the Repository**
   ```bash
   git clone https://github.com/your-username/fullstack-chat-app.git
   cd fullstack-chat-app
   ```

2. **Install Dependencies**
   ```bash
   npm run build
   ```
   This will install all required dependencies for both frontend and backend.

3. **Environment Setup**
   - Create a `.env` file in the backend directory
   - Add the required environment variables (see Environment Variables section below)

4. **Start the Application**
   ```bash
   npm start
   ```
   The application will be available at:
   - Frontend: http://localhost:3000
   - Backend: http://localhost:5001

## Project Overview
This is a full-stack real-time chat application built using the MERN stack (MongoDB, Express.js, React.js, Node.js) with additional technologies like Socket.io for real-time communication, TailwindCSS for styling, and DaisyUI for UI components.

## Tech Stack
- **Frontend**: React.js, TailwindCSS, DaisyUI, Zustand (State Management)
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Real-time Communication**: Socket.io
- **Authentication**: JWT (JSON Web Tokens)
- **File Storage**: Cloudinary

## Project Structure
```
fullstack-chat-app/
├── frontend/           # React frontend application
├── backend/           # Node.js/Express backend server
├── package.json       # Root package.json for managing both frontend and backend
└── README.md         # Project overview and quick start guide
```

## Features
1. **Real-time Messaging**
   - Instant message delivery using Socket.io
   - Online user status tracking
   - Message history persistence

2. **Authentication & Authorization**
   - JWT-based authentication
   - Secure user sessions
   - Protected routes

3. **User Interface**
   - Modern and responsive design using TailwindCSS
   - DaisyUI components for enhanced UI
   - Real-time status updates

4. **State Management**
   - Global state management using Zustand
   - Efficient data flow and updates

5. **Error Handling**
   - Comprehensive error handling on both client and server
   - User-friendly error messages
   - Graceful fallbacks

## Setup Instructions

### Prerequisites
- Node.js (v14 or higher)
- MongoDB
- Cloudinary account (for image storage)

### Environment Variables
Create a `.env` file in the backend directory with the following variables:
```
MONGODB_URI=your_mongodb_connection_string
PORT=5001
JWT_SECRET=your_jwt_secret

CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

NODE_ENV=development
```

### Installation
1. Clone the repository
2. Install dependencies:
   ```bash
   npm run build
   ```
   This command will:
   - Install backend dependencies
   - Install frontend dependencies
   - Build the frontend application

### Running the Application
Start the application:
```bash
npm start
```
This will start the backend server which serves the frontend application.

## Development
- Frontend runs on port 3000 (development)
- Backend runs on port 5001
- MongoDB connection is required for database operations
- Socket.io handles real-time communication

## Deployment
The application can be deployed using various platforms:
- Frontend: Vercel, Netlify, or similar static hosting
- Backend: Heroku, DigitalOcean, or similar Node.js hosting
- Database: MongoDB Atlas
- File Storage: Cloudinary

## Security Considerations
1. JWT tokens are used for secure authentication
2. Environment variables are used for sensitive data
3. Input validation on both client and server
4. Secure password handling
5. Protected API endpoints

## Contributing
1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License
This project is licensed under the ISC License. 