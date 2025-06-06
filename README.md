# 📱 Contact Manager Full Stack Application

A modern and efficient contact management system built with Java Spring Boot backend and React frontend. This application provides a seamless experience for managing contacts with features like CRUD operations, search functionality, and a responsive user interface.

## 🚀 Features

- ✨ Create, Read, Update, and Delete contacts
- 🔍 Search and filter contacts
- 📱 Responsive design for all devices
- 🔒 Secure API endpoints
- 🎨 Modern and intuitive user interface
- 📊 Efficient data management
- 🔄 Real-time updates

## 🛠️ Tech Stack

### Backend
- Java 17
- Spring Boot
- Spring Data JPA
- MySQL Database
- Maven

### Frontend
- React.js
- Material-UI
- Axios
- React Router
- Redux Toolkit

## 📁 Project Structure

```
📦 contact-manager-fullstack-java
├── 📂 contactapi-backend
│   ├── 📂 src
│   │   ├── 📂 main
│   │   │   ├── 📂 java
│   │   │   │   └── 📂 com
│   │   │   │       └── 📂 example
│   │   │   │           └── 📂 contactapi
│   │   │   │               ├── 📂 config
│   │   │   │               │   └── 📄 CorsConfig.java
│   │   │   │               ├── 📂 constant
│   │   │   │               ├── 📂 domain
│   │   │   │               │   └── 📄 Contact.java
│   │   │   │               ├── 📂 repo
│   │   │   │               │   └── 📄 ContactRepo.java
│   │   │   │               ├── 📂 resource
│   │   │   │               │   └── 📄 ContactResource.java
│   │   │   │               ├── 📂 service
│   │   │   │               │   └── 📄 ContactService.java
│   │   │   │               └── 📄 Application.java
│   │   │   └── 📂 resources
│   │   └── 📂 test
│   ├── 📂 target
│   ├── 📂 .mvn
│   ├── 📄 pom.xml
│   ├── 📄 mvnw
│   └── 📄 mvnw.cmd
│
├── 📂 contactapi-frontend
│   ├── 📂 src
│   │   ├── 📂 api
│   │   │   ├── 📄 ContactService.js
│   │   │   └── 📄 ToastService.js
│   │   ├── 📂 components
│   │   │   ├── 📄 Contact.js
│   │   │   ├── 📄 ContactDetail.js
│   │   │   ├── 📄 ContactList.js
│   │   │   └── 📄 Header.js
│   │   ├── 📄 App.js
│   │   ├── 📄 index.js
│   │   └── 📄 index.css
│   ├── 📂 public
│   ├── 📄 package.json
│   └── 📄 package-lock.json
│
└── 📂 uploads
```

### Backend Structure Details
- **config/**
  - `CorsConfig.java` - CORS configuration for cross-origin requests
- **domain/**
  - `Contact.java` - Contact entity class with properties and annotations
- **repo/**
  - `ContactRepo.java` - JPA repository interface for Contact entity
- **resource/**
  - `ContactResource.java` - REST controller with CRUD endpoints
- **service/**
  - `ContactService.java` - Business logic implementation for contact operations
- **Application.java** - Main application entry point

### Frontend Structure Details
- **api/**
  - `ContactService.js` - API integration for contact operations
  - `ToastService.js` - Toast notification service
- **components/**
  - `Contact.js` - Individual contact component
  - `ContactDetail.js` - Contact details view component
  - `ContactList.js` - List of contacts component
  - `Header.js` - Application header component
- **App.js** - Main application component
- **index.js** - Application entry point
- **index.css** - Global styles

## 🚀 Getting Started

### Prerequisites
- Java 17 or higher
- Node.js 14 or higher
- MySQL 8.0 or higher
- Maven
- npm or yarn

### Backend Setup
1. Navigate to the backend directory:
   ```bash
   cd contactapi-backend
   ```
2. Install dependencies:
   ```bash
   mvn install
   ```
3. Configure database in `application.properties`
4. Run the application:
   ```bash
   mvn spring-boot:run
   ```

### Frontend Setup
1. Navigate to the frontend directory:
   ```bash
   cd contactapi-frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```

## 🤝 Contributing

We welcome contributions to improve the Contact Manager application! Here's how you can contribute:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add some amazing feature'`)
5. Push to the branch (`git push origin feature/amazing-feature`)
6. Open a Pull Request

Please make sure to update tests as appropriate and adhere to the existing coding style.

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Authors

- **HARIHARANS24** - *Initial work* - [GitHub Profile](https://github.com/HARIHARANS24)

## 🙏 Acknowledgments

- Spring Boot team for the amazing framework
- React team for the frontend library
- All contributors who have helped shape this project
