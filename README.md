# Multilingual-Smart-Chatbot-for-PGRKAM-capstoneproject
Project Overview

A smart AI-driven chatbot designed to enhance user experience on the **Punjab Ghar Ghar Rozgar and Karobar Mission (PGRKAM)** portal. The chatbot provides instant answers, personalized job recommendations, and seamless navigation across multiple employment and skill development services using multilingual support (Punjabi, Hindi, English).


 Problem Statement

The PGRKAM portal and mobile application offer diverse employment-related services including job listings, skill development programs, self-employment opportunities, and foreign study counseling. However, users struggle to navigate multiple modules to find relevant information. This project addresses this gap by providing:

- **Instant Query Resolution**: AI-powered responses to user questions
- **Personalized Recommendations**: Job suggestions based on user preferences and history
- **Multilingual Support**: Text and voice interaction in Punjabi, Hindi, and English
- **Seamless Navigation**: Direct guidance to relevant resources


 Objectives

 Develop an AI-driven chatbot using Large Language Models (GPT-3.5/GPT-4) 
 Enable multilingual support for text and voice queries
 Provide intelligent answers and navigation guidance
 Recommend jobs based on candidate preferences
 Maintain chat history and user profiles


## Key Features

- 🤖 **AI-Powered Conversations**: Natural language understanding using OpenAI GPT-3.5/GPT-4
- 🌐 **Multilingual Support**: Punjabi, Hindi, and English
- 🎤 **Voice Interaction**: Speech-to-text and text-to-speech capabilities
- 💼 **Job Recommendations**: Personalized suggestions based on user profile
- 📱 **Responsive Design**: Works seamlessly on desktop and mobile devices
- 💾 **User History**: Stores chat history and preferences
- ⚡ **Real-time Responses**: Instant query handling


---

## Technology Stack

### Frontend

- **React.js** (Latest Version) - Interactive UI framework
- **HTML5, CSS3, JavaScript (ES6)** - Core web technologies
- **Tailwind CSS / Bootstrap** - Responsive styling
- **Axios** - HTTP client for API calls


### Backend

- **Node.js** - Runtime environment
- **Express.js** - Web framework for REST APIs
- **MongoDB / PostgreSQL** - Database for user data and chat history


### AI & NLP

- **OpenAI GPT-3.5 / GPT-4 API** - Natural language processing
- **Google Cloud Translation API / Indic NLP Library** - Multilingual support
- **Web Speech API** - Voice input/output


### Tools & Utilities

- **Git & GitHub** - Version control
- **Postman** - API testing
- **Visual Studio Code** - Development environment
- **Docker** (Optional) - Containerization for deployment


### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- MongoDB / PostgreSQL
- OpenAI API Key
- Google Cloud Translation API Key (optional)

 ```bash 
# Clone the repository
git clone https://github.com/Nidhi-hb/Multilingual-SmartChatbot-capstoneproject.git
cd backend

# Install dependencies
npm install

# Create .env file with the following variables
OPENAI_API_KEY=your_openai_api_key
MONGODB_URI=your_mongodb_connection_string
PORT=5000
GOOGLE_TRANSLATE_API_KEY=your_google_api_key

# Start the backend server
npm start

 ```

## API Endpoints

### Chat Endpoints

- `POST /api/chat` - Send a message to the chatbot
- `GET /api/chat/history/:userId` - Retrieve chat history
- `DELETE /api/chat/history/:userId` - Clear chat history


### Job Endpoints

- `GET /api/jobs` - Get all job listings
- `GET /api/jobs/recommendations/:userId` - Get personalized recommendations
- `POST /api/jobs/apply` - Apply for a job


### User Endpoints

- `POST /api/users/register` - Register a new user
- `POST /api/users/login` - User login
- `GET /api/users/profile/:userId` - Get user profile
