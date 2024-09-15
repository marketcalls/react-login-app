# React Login Application

This is a simple login application built with React, Express, and SQLite. It features user authentication, a signup process, and a dashboard for logged-in users.

## Features

- User registration (signup)
- User authentication (login)
- Dashboard for authenticated users
- SQLite database for user storage
- Responsive design using Tailwind CSS

## Prerequisites

- Node.js (v14 or later)
- npm (v6 or later)

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/marketcalls/react-login-app.git
   cd react-login-app
   ```

2. Install dependencies:
   ```
   npm install
   ```

## Running the Application

To run both the frontend and backend concurrently:

```
npm run dev
```

This will start the React development server on port 3000 and the Express server on port 5000.

## Project Structure

- `src/`: Contains the React frontend code
  - `components/`: React components including LoginForm, SignupForm, and Dashboard
  - `App.tsx`: Main React component
- `server.js`: Express server and API endpoints
- `users.db`: SQLite database file (will be created when the server first runs)

## Technologies Used

- React
- TypeScript
- Express.js
- SQLite (better-sqlite3)
- Tailwind CSS
- shadcn/ui components

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the [MIT License](LICENSE).
