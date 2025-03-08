# Manager Pro Admin Dashboard

A modern, feature-rich admin dashboard built with Angular 19, featuring role-based authentication, modular architecture, and responsive design.

## Features

- 🔐 Role-based authentication
- 📊 Dynamic dashboard
- 📱 Responsive design
- 🎨 Modern UI with Angular Material and Tailwind CSS
- 📦 Modular architecture

## Installation

1. Clone the repository:
```bash
git clone https://github.com/Abdalrhman772/admin-dashboard.git
```

```bash
cd manager-pro
```

```bash
npm install
```

```bash
npm install -g json-server
```

## Running the Application

1. Start the JSON server (mock backend):
```bash
json-server --watch db.json --port 3000
```

2. Start the Angular development server:
```bash
ng serve
```

Navigate to `http://localhost:4200`. The application will automatically reload if you change any source files.

## Authentication

The system includes two predefined user roles:

1. Admin User
   - Email: admin@devSolutions.com
   - Password: admin
   - Access: Full system access

2. Regular User
   - Email: user@devSolutions.com
   - Access: Dashboard only

## Project Architecture

### Core Modules

- `AuthModule`: Handles authentication and authorization
- `SharedModule`: Contains common components and services
- `CoreModule`: Singleton services and one-time initialization

### Feature Modules

- `DashboardModule`: Main dashboard views
- `ReportsModule`: Reporting functionality
- `OrdersModule`: Order management system

### Key Components

- `LayoutComponent`: Main application shell
- `LoginComponent`: Authentication interface
- `RegisterComponent`: User registration
- `AuthGuard`: Route protection based on user roles

## Technology Stack

- **Frontend Framework**: Angular 19
- **UI Libraries**: 
  - Angular Material
  - Tailwind CSS
- **State Management**: Services with RxJS
- **Styling**: SCSS
- **Backend Mock**: json-server
- **Testing**: Karma & Jasmine

## Development

### Building for Production

```bash
ng build --configuration production
```

### Running Tests

```bash
ng test
```

## Design Choices & Trade-offs

1. **Modular Architecture**
   - Pros: Better code organization, lazy loading
   - Cons: Initial setup complexity

2. **Angular Material + Tailwind CSS**
   - Pros: Robust UI components with flexible styling
   - Cons: Bundle size consideration

3. **JSON Server**
   - Pros: Rapid prototyping, no backend setup
   - Cons: Limited to development environment

## Project Structure

```
src/
├── app/
│   ├── core/          # Core functionality
│   ├── shared/        # Shared components
│   ├── modules/       # Feature modules
│   └── auth/          # Authentication
├── assets/
└── styles/
```
