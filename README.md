# URL Shortener Frontend

This repository contains the **frontend** of a URL shortener application, built using **React**, **TypeScript**, **Vite**, and **Tailwind CSS**. The frontend allows users to input a long URL and receive a shortened version using the backend API.

## Project Goal

The purpose of this project is to create a user-friendly interface that interacts with a backend API to shorten URLs. Users input a long URL into the form, and the application displays a shortened version in return.

## Features

- **Submit Long URLs**: Users can input a long URL and submit it for shortening.
- **Display Shortened URL**: After submission, the shortened URL is shown on the screen.
- **Tailwind CSS Styling**: Simple, modern, and responsive design using Tailwind CSS.
- **Error Handling**: Provides basic error handling for failed API requests.

## Technologies Used

- **React**: For building the interactive user interface.
- **TypeScript**: For static typing to improve code quality.
- **Vite**: For fast bundling and development environment.
- **Tailwind CSS**: For responsive and utility-first styling.

## Prerequisites

Before starting, ensure you have the following tools installed:

- **Node.js** (v14.x or higher)
- **npm** or **yarn**
- Running backend API for URL shortening

## Getting Started

1. **Clone the Repository**:

   ```
git clone origin https://github.com/sitra061212/CodeAlpha_Url_Shortener_Frontend.git   cd url-shortener-frontend
   ```

2. **Install Dependencies**:

   ```
   npm install

   ```

3. **Run the Development Server**:

   ```
   npm run dev

   ```
   The app will be available on `http://localhost:5173`.


4. ## Project Structure

```
url-shortener-frontend/
├── src/
│   ├── components/
│   │   ├── UrlForm.tsx           # Component for submitting long URLs
│   │   ├── UrlDisplay.tsx        # Component for displaying the shortened URL
│   ├── App.tsx                   # Root component
│   ├── index.css                 # Global styles and Tailwind setup
│   ├── main.tsx                  # Entry point for the React app
│   └── vite-env.d.ts             # TypeScript Vite environment types
├── public/
│   └── index.html                # HTML template
├── .gitignore                    # Files to ignore in version control
├── package.json                  # Project metadata and dependencies
├── tailwind.config.js            # Tailwind CSS configuration
├── tsconfig.json                 # TypeScript configuration
├── vite.config.ts                # Vite configuration
└── README.md                     # Project documentation
```
