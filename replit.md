# Locrate - Web Application Architecture

## Overview

This repository contains a full-stack web application called "Locrate" which appears to be a personal inventory management system that helps users organize their belongings with virtual boxes and QR codes. The application is built with:

- **Frontend**: React with Tailwind CSS and Shadcn UI components
- **Backend**: Express.js server
- **Database**: PostgreSQL (with Drizzle ORM)
- **Routing**: Wouter (lightweight alternative to React Router)
- **State Management**: React Query

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

The application follows a modern web application architecture with the following components:

1. **Client-side Application**: 
   - Built with React and TypeScript
   - Uses Tailwind CSS for styling
   - Implements Shadcn UI component library
   - Managed by Vite for development and building

2. **Server-side Application**:
   - Express.js server handling API requests
   - API endpoints for account management
   - Serves the client application in production

3. **Database Layer**:
   - Uses Drizzle ORM to interface with PostgreSQL
   - Schema defined in shared directory for type safety across frontend and backend
   - Currently configured to use PostgreSQL, but with a memory implementation for development

4. **Authentication**:
   - Basic user system with username/password

## Key Components

### Frontend

1. **Pages**:
   - Home - Landing page showing features of the application
   - Account - User account management page with deletion functionality
   - Terms - Terms and conditions page
   - Privacy - Privacy policy page
   - Not Found - 404 error page

2. **Components**:
   - Header - Navigation and application branding
   - Footer - Links and copyright information
   - UI Components - Extensive library of Shadcn UI components (buttons, forms, modals, etc.)
   - ThemeProvider - Handles light/dark mode functionality

3. **Hooks and Utils**:
   - useToast - For displaying toast notifications
   - useIsMobile - For responsive designs
   - queryClient - For data fetching with React Query

### Backend

1. **Server Setup**:
   - Express.js with JSON parsing middleware
   - Request logging for API routes
   - Error handling middleware

2. **API Routes**:
   - `/api/account-deletion` - Endpoint for account deletion requests

3. **Data Storage**:
   - Interface for database operations
   - Memory implementation for development
   - Schema for users and account deletion requests

### Shared

1. **Database Schema**:
   - User schema with validation
   - Account deletion request schema with validation

## Data Flow

1. **User Account Management**:
   - Account creation: Form submission → API request → Database storage
   - Account deletion: Form submission with confirmation → API request → Record in deletion_requests table

2. **API Requests**:
   - Client uses the `apiRequest` function to make HTTP requests to the server
   - Server validates requests using Zod schemas
   - Server processes requests and returns appropriate responses

3. **State Management**:
   - React Query manages server state
   - Local state is managed with React's useState/useContext hooks

## External Dependencies

### Frontend

1. **UI Framework**:
   - React with TypeScript
   - Tailwind CSS for styling
   - Shadcn UI for components (built on Radix UI primitives)

2. **State Management and Data Fetching**:
   - @tanstack/react-query for server state
   - React hooks for local state

3. **Form Handling**:
   - React Hook Form with Zod for validation

4. **Routing**:
   - Wouter for client-side routing

### Backend

1. **Server Framework**:
   - Express.js

2. **Database**:
   - Drizzle ORM
   - PostgreSQL (via @neondatabase/serverless)

3. **Validation**:
   - Zod for schema validation

## Deployment Strategy

The application is configured for deployment in the Replit environment:

1. **Development Mode**:
   - Run `npm run dev` to start the development server
   - Vite handles hot module replacement and bundling

2. **Production Build**:
   - Run `npm run build` to:
     - Build the React application with Vite
     - Bundle the server code with esbuild
   - Run `npm run start` to start the production server

3. **Database Management**:
   - Run `npm run db:push` to push schema changes to the database
   - The application expects a PostgreSQL database URL in the environment variable `DATABASE_URL`

## Planned Improvements

1. **Authentication System**:
   - Implement full user authentication with sessions
   - Add social login options

2. **Database Migration**:
   - Move from in-memory implementation to fully persistent PostgreSQL storage

3. **UI Enhancements**:
   - Complete mobile responsiveness
   - Implement more interactive features

4. **API Expansion**:
   - Add more endpoints for user management
   - Implement CRUD operations for user's inventory items