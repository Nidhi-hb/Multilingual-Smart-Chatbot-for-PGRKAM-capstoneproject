# Multilingual-Smart-Chatbot-for-PGRKAM-capstoneproject
Project Overview

A smart AI-driven chatbot designed to enhance user experience on the **Punjab Ghar Ghar Rozgar and Karobar Mission (PGRKAM)** portal. The chatbot provides instant answers, personalized job recommendations, and seamless navigation across multiple employment and skill development services using multilingual support (Punjabi, Hindi, English).


 Problem Statement

The PGRKAM portal and mobile application offer diverse employment-related services including job listings, skill development programs, self-employment opportunities, and foreign study counseling. However, users struggle to navigate multiple modules to find relevant information. This project addresses this gap by providing:

- **Instant Query Resolution**: AI-powered responses to user questions
- **Personalized Recommendations**: Job suggestions based on user preferences and history
- **Multilingual Support**: Text and voice interaction in Punjabi, Hindi, and English
- **Seamless Navigation**: Direct guidance to relevant resources




- Google Cloud Translation API Key (optional)

Installation

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

## 🏗 Project Structure

 ```bash 
src/
├── components/           # React components
│   ├── Header.tsx       # Navigation with language selector
│   ├── Hero.tsx         # Landing section with animated background
│   ├── JobList.tsx      # Job listings with search/filter
│   ├── JobCard.tsx      # Individual job display cards
│   └── ApplicationModal.tsx # Job application form
├── context/
│   └── LanguageContext.tsx # Language state management
├── data/
│   └── jobs.ts          # Sample job data
├── types/
│   └── index.ts         # TypeScript type definitions
├── App.tsx              # Main application component
├── main.tsx             # Application entry point
└── index.css            # Global styles and gradients

 ```

## 🎨 Design System

### *Color Gradients*
- *Hero Section*: Animated gradient with multiple colors
- *Job Section*: Warm orange-to-peach gradient
- *Cards*: Glass morphism with backdrop blur
- *Buttons*: Purple-to-pink gradient with hover effects

### *Typography*
- *Headings*: Bold with gradient text effects
- *Body Text*: Clean, readable fonts with proper contrast
- *Multilingual*: Optimized for all supported languages

### *Animations*
- *Background*: Continuous gradient animation (15s cycle)
- *Cards*: Hover lift and scale effects
- *Buttons*: Scale and shadow transitions
- *Loading*: Smooth spinner animations


 Application Flow

1. *Landing*: User sees animated hero section
2. *Language Selection*: Choose preferred language from header
3. *Job Browsing*: Search and filter available positions
4. *Job Application*: Click "Apply Now" to open modal
5. *Form Submission*: Fill details and upload resume
6. *Confirmation*: Success message with next steps

## 🔧 Technical Details

### *Built With*
- *React 18* with TypeScript
- *Tailwind CSS* for styling
- *Lucide React* for icons
- *Vite* for build tooling

*Key Features*
- *Context API* for state management
- *Custom hooks* for language switching
- *File upload* with validation
- *Responsive design* with mobile-first approach
- *Accessibility* considerations throughout

