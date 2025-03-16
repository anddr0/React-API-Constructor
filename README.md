# React API Constructor


## Overview
**API Constructor** is a pet project built to highlight my **React** skills. It uses a custom hook (`useApiRequest`) for all HTTP calls (powered by **axios**), manages form data in React state, and displays responses via **React JSON Viewer**. Tailwind CSS is used for styling and **ESLint / Prettier** help maintain code quality.

**This project:**
- Demonstrates modular React component architecture
- Illustrates how to handle HTTP requests, errors, and loading states with a custom hook
- Showcases code organization, error boundaries, and basic test setups with **Jest**

---

## Demonstration
### Api Form
<img src="https://github.com/user-attachments/assets/c35be885-b075-46ee-b2f2-0989f6afacd4" width="300" height="500">
### Response
<img src="https://github.com/user-attachments/assets/9ec1a9f9-a923-42b6-b3ae-fac15c91eebd" width="400" height="500">
### "Mobile" version (for small screens)
<img src="https://github.com/user-attachments/assets/fd61306f-67d2-432f-a805-6dd74f7a4f60" width="300" height="500">

---

## Features
- **Dynamic Request Builder**: Choose HTTP method, add headers, and optionally provide a JSON body.
- **Real-Time Response Preview**: View responses as formatted JSON or raw text.
- **Error Handling**: Custom error messages for different status codes (404, 401, 500, etc.).
- **Responsive Layout**: Built with Tailwind, ensuring a clean UI on mobile and desktop.

---

## Tech Stack
- **React** (create-react-app)
- **Axios** (HTTP requests)
- **Tailwind CSS** (styling)
- **Material UI Icons** (icons)
- **Jest** (unit and integration tests)
- **ESLint & Prettier** (code linting & formatting)

---

## Prerequisites
- **Node.js** (v16+ recommended)
- **npm** or **yarn** package manager

---

## Getting Started

1. **Clone the repo**:
   ```bash
   git clone https://github.com/your-username/api-constructor.git
   cd api-constructor
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm start
   ```
   The app will be served at **http://localhost:3000**.

---

## Usage
1. **Enter the Request URL** (e.g., `https://jsonplaceholder.typicode.com/posts`).
2. **Select HTTP Method** (GET, POST, PUT, DELETE).
3. (Optional) **Add Headers** by clicking “Add Header” and specifying `key` and `value`.
4. (Optional) **Add Request Body** in JSON format (for POST/PUT).
5. **Send the Request** by clicking “Send API Request”.
6. View the **Response** in the right panel:
    - Copy the response to your clipboard.
    - Clear the response to start fresh.

**Important**: This app does not enforce CORS restrictions or authentication by default. Make sure your endpoint supports requests from your browser environment.

---

## Testing
1. **Unit/Integration Tests** use **Jest** and **React Testing Library**.
2. Run tests:
   ```bash
   npm test
   ```
   The coverage and test results will be shown in the console.

---

## Future Improvements
- **TypeScript**: Add type definitions for props, hooks, and utilities.
- **Authentication**: Support OAuth2, JWT, or Basic Auth.
- **Persisted History**: Save previous requests and responses.
- **Environment Variables**: Add environment-based configs (dev, staging, prod).
- **User-friendly Validation**: More robust URL validation, JSON schema checks, etc.

