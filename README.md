# Project 0EAI

## Overview

0EAI is an AI-powered application designed to help users manage their emails more efficiently. The application provides features such as composing, summarizing, searching, and scheduling emails, making email management faster and smarter.

## Features

- Connect to email accounts (Gmail, Outlook, IMAP)
- AI-generated email composition
- Email thread summarization
- Smart email search functionality
- Draft saving and scheduling for future sends
- Subscription management through Stripe
- Insights, metrics and analytics

## Tech Stack

- **Backend:** ASP.NET Core Minimal API
- **Database:** PostgreSQL (Supabase, Railway, or Render)
- **Desktop App:** Electron + React + Vite + TailwindCSS
- **Mobile App:** React Native
- **AI Integration:** OpenAI API (GPT-4 Turbo or 3.5 Turbo for MVP)
- **Payments:** Stripe Subscriptions
- **Hosting:** Railway/Supabase for backend and database; optional AWS or Render

## Getting Started

### Prerequisites

- .NET SDK
- Node.js
- PostgreSQL
- Stripe account for payment processing

### Installation

1. Clone the repository (ensure you have access):
   - **HTTPS** (requires Personal Access Token):
     ```
     git clone https://<your-username>:<your-personal-access-token>@github.com/slattimo/Project-0EAI.git
     ```
   - **SSH** (requires SSH key setup):
     ```
     git clone git@github.com:slattimo/Project-0EAI.git
     ```
   - **BRANCHING**
     ```
     git checkout -b <branch-name>
     ```
   - **PUSHING**
     ```
     git push -u origin <branch-name>
     ```

2. Navigate to the backend directory and restore dependencies:
   ```
   cd 0EAI/backend
   dotnet restore
   ```

3. Set up the database using the schema defined in `database/schema.sql`.

4. Navigate to the desktop directory and install dependencies:
   ```
   cd ../desktop
   npm install
   ```

5. Navigate to the mobile directory and install dependencies:
   ```
   cd ../mobile
   npm install
   ```

### Running the Application

- **Backend:** 
   ```
   cd backend
   dotnet run
   ```

- **Desktop App:** 
   ```
   cd desktop
   npm run dev
   ```

- **Mobile App:** 
   ```
   cd mobile
   npm start
   ```

## License

This project license is a WIP - see the [LICENSE](LICENSE) file for details.