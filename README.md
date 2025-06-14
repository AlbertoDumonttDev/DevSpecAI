# DevSpecAI (Spring Boot API + React Frontend)

DevSpecAI is a full-stack project designed to help users generate project specifications tailored to their professional level, preferred technologies, and career goals. The backend is built using Java with Spring Boot, and it integrates with the [Cohere AI API](https://cohere.com/) to generate AI-driven project specs. The frontend, developed in React.js, consumes this API and delivers a clean user interface.

This project was mainly focused on backend architecture and learning modern Java/Spring Boot concepts, while also deploying a production-ready full-stack app using Docker and Render.

### 🌐 Live Demo:
[https://devspecai.onrender.com/](https://devspecai.onrender.com/)


⚠️ Live Demo Availability Notice: Please note that the live demo hosted on Render might experience occasional downtime, especially during periods of inactivity or due to Render's free-tier limitations.
If the demo appears unavailable, you can run the project locally by following the instructions below.

Thanks for understanding!

---

## ✨ Features (Backend Focus)

- ✅ User input validation with custom DTOs and Enums
- ✅ Custom Exception Handling and Global Error Responses
- ✅ External API Integration (Cohere AI) for AI text generation
- ✅ Prompt Engineering layer for better AI output control
- ✅ Service layer with clear separation of concerns
- ✅ API response wrapping and standardization
- ✅ Dockerized backend for easy deployment
- ✅ Hosted on Render with environment-specific configurations

---

## 🛠️ Technologies Used

| Technology        | Purpose                                 |
|-------------------|-----------------------------------------|
| Java 21+          | Main backend language                   |
| Spring Boot       | API development framework               |
| Lombok            | Boilerplate code reduction              |
| Spring Web        | REST API development                   |
| Spring Validation | Input validation using annotations      |
| Cohere AI API     | External AI API for project specification |
| Docker            | Containerization for both backend|
| Render            | Hosting platform for deployment         |
| React.js          | Frontend development                   |

---

## 🚧 Backend Architecture Overview

| Concept                  | Implementation Details                                      |
|--------------------------|------------------------------------------------------------|
| DTO (Data Transfer Objects) | Used for clean API request/response objects           |
| Enums                    | For controlled values like `ProfessionalLevel`|
| Service Layer            | Business logic and external API calls                     |
| Exception Handling       | Global `@ControllerAdvice` for standard error responses   |
| API Integration Layer    | RestTemplate-based call to Cohere AI API                  |
| Prompt Engineering       | Dynamically constructs AI prompts based on user input     |

---

## 📑 API Documentation

### Endpoint: Generate Project Specification

**POST** `/api/spec`

**Description:**  
Generates a project specification based on the user's profile.

**Request Body Example:**

```json
{
  "technologies": "Java, springboot and react.js",
  "professionalLevel": ["JUNIOR", "MID", "SENIOR"],
  "careerObjective": "I want to learn how to build APIs and deploy full-stack applications."
}
```

| Field              | Type   | Description                                 |
|------------------- |--------|-------------------------------------------|
| technologies       | String | List of technology |
| professionalLevel  | String | Enum: JUNIOR, MID, SENIOR                 |
| careerObjective    | String | User's career goal description            |

---

### ✅ Success Response:

```json
{
  "spec": "As a Junior developer wanting to build APIs using Java and Spring Boot..."
}
```

### ❌ Error Response Example (400 Bad Request):

```json
{
  "timestamp": "2025-06-14T16:44:38.097+00:00",
  "status": 400,
  "error": "Bad Request",
  "message": "Invalid value for field 'professionalLevel'. Allowed values: JUNIOR, MID, SENIOR"
}
```
---

### ✅ Learning Goals Behind This Project

| Concept                  | Applied How?                               |
| ------------------------ | ------------------------------------------ |
| Spring Boot API Design   | DTOs, Services, Controllers, Exception Handling |
| External API Consumption | Integration with Cohere AI API             |
| Docker                   | Dockerfile for backend             |
| Deployment               | Hosted both services on Render             |
| Prompt Engineering       | Created dynamic prompts for AI text generation |
| Frontend API Consumption | React app calling backend REST API         |

---

### 📡 Deployment
The app is deployed on Render:

- Backend: https://backend-devspecai.onrender.com/
- Frontend: https://devspecai.onrender.com/

---

### 📌 Future Improvements
- Add authentication layer (Spring Security or JWT)
- Add Swagger/OpenAPI documentation
- Improve frontend UI/UX
- Expand AI prompt templates for more use cases

---

## 🏃 Running Locally (Without Docker)

If you prefer to run the project locally without Docker, follow these steps:

### Backend (Spring Boot)

**Prerequisites:**

- Java 17+ or Java 21+
- Maven

**Steps:**

```bash
# Navigate to backend folder
cd backend

# Build the project (skipping tests)
mvn clean install -DskipTests

# Run the backend
mvn spring-boot:run
```
By default, the backend runs on:

http://localhost:8080/


### Frontend (React.js)

**Prerequisites:**

- Node.js (v18 or newer recommended)
- NPM

**Steps:**

```bash
# Navigate to frontend folder
cd frontend

# Install dependencies
npm install

# Run the development server
npm run dev
```
By default, the frontend runs on:

http://localhost:5173/
