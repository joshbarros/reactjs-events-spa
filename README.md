# **reactjs-events-spa**

## Overview
**reactjs-events-spa** is a React single-page application (SPA) that interacts with a WordPress backend using GraphQL and Apollo Client. This app allows users to view a list of online events and get details about each event in a modal window. It features both light and dark modes and is built with a mobile-first design approach.

## Features
- **Online Events List**: Displays a list of events fetched via GraphQL from a WordPress backend.
- **Event Detail Modal**: Displays detailed information about an event in a modal when clicked.
- **Dark/Light Mode Toggle**: Users can switch between dark and light themes.
- **Formatted Dates**: Dates are formatted in the "September 22nd, 2024" format for better readability.
- **Styling with CSS**: The app is styled using modern CSS practices with mobile-first design considerations.

## Installation

### 1. Clone the repository:
    git clone https://github.com/joshbarros/reactjs-events-spa.git
    cd reactjs-events-spa
### 2. Install Dependencies:
    npm install
### 3. Set up Environment Variables:
Copy .env.example to a .env file in the root directory and add the following:

### 4. Run the App:
    npm start

The app will be available at http://localhost:3000.

## Key Libraries
- **React**: For building the UI.
- **Apollo Client**: To manage GraphQL queries and caching.
- **GraphQL**: To fetch data from the WordPress backend using WPGraphQL.
- **ESLint & Prettier**: For code linting and formatting.
- **Husky**: For Git hooks to enforce code quality checks before commits.

## Development

### Linting & Formatting
To run ESLint and Prettier manually:
```bash
npm run lint
```

## Build
```bash
npm run build
```

## Deployment

After building the app, deploy the files from the `build/` directory to your hosting service.
