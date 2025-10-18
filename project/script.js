// Language translations
const translations = {
    en: {
        welcome: "Hello! I'm your AI assistant. How can I help you today?",
        placeholder: "Type your message...",
        responses: {
            hello: "Hello! Nice to meet you! How are you doing today?",
            help: "I'm here to help you with any questions you have. You can ask me about:\n• Weather information\n• Current time\n• General questions\n• Job recommendations\n• And much more!",
            weather: "I'd be happy to help with weather information! Could you please tell me which city you'd like to know about?",
            time: `The current time is ${new Date().toLocaleTimeString()}`,
            default: "I understand you're trying to communicate with me. Could you please rephrase your question? I'm here to help!"
        }
    },
    hi: {
        welcome: "नमस्ते! मैं आपका AI सहायक हूं। आज मैं आपकी कैसे सहायता कर सकता हूं?",
        placeholder: "अपना संदेश टाइप करें...",
        responses: {
            hello: "नमस्ते! आपसे मिलकर खुशी हुई! आप कैसे हैं?",
            help: "मैं यहां आपके किसी भी प्रश्न में सहायता के लिए हूं। आप मुझसे इन चीजों के बारे में पूछ सकते हैं:\n• मौसम की जानकारी\n• वर्तमान समय\n• सामान्य प्रश्न\n• नौकरी की सिफारिशें\n• और भी बहुत कुछ!",
            weather: "मैं मौसम की जानकारी में आपकी सहायता करने में खुश हूं! कृपया बताएं कि आप किस शहर के बारे में जानना चाहते हैं?",
            time: `वर्तमान समय ${new Date().toLocaleTimeString()} है`,
            default: "मैं समझ गया कि आप मुझसे बात करने की कोशिश कर रहे हैं। कृपया अपना प्रश्न दोबारा पूछें? मैं आपकी सहायता के लिए यहां हूं!"
        }
    },
    pa: {
        welcome: "ਸਤ ਸ੍ਰੀ ਅਕਾਲ! ਮੈਂ ਤੁਹਾਡਾ AI ਸਹਾਇਕ ਹਾਂ। ਅੱਜ ਮੈਂ ਤੁਹਾਡੀ ਕਿਵੇਂ ਸਹਾਇਤਾ ਕਰ ਸਕਦਾ ਹਾਂ?",
        placeholder: "ਆਪਣਾ ਸੰਦੇਸ਼ ਟਾਈਪ ਕਰੋ...",
        responses: {
            hello: "ਸਤ ਸ੍ਰੀ ਅਕਾਲ! ਤੁਹਾਨੂੰ ਮਿਲ ਕੇ ਖੁਸ਼ੀ ਹੋਈ! ਤੁਸੀਂ ਕਿਵੇਂ ਹੋ?",
            help: "ਮੈਂ ਤੁਹਾਡੇ ਕਿਸੇ ਵੀ ਸਵਾਲ ਵਿੱਚ ਸਹਾਇਤਾ ਲਈ ਇੱਥੇ ਹਾਂ। ਤੁਸੀਂ ਮੈਨੂੰ ਇਹਨਾਂ ਚੀਜ਼ਾਂ ਬਾਰੇ ਪੁੱਛ ਸਕਦੇ ਹੋ:\n• ਮੌਸਮ ਦੀ ਜਾਣਕਾਰੀ\n• ਮੌਜੂਦਾ ਸਮਾਂ\n• ਆਮ ਸਵਾਲ\n• ਨੌਕਰੀ ਦੀਆਂ ਸਿਫਾਰਿਸ਼ਾਂ\n• ਅਤੇ ਹੋਰ ਬਹੁਤ ਕੁਝ!",
            weather: "ਮੈਂ ਮੌਸਮ ਦੀ ਜਾਣਕਾਰੀ ਵਿੱਚ ਤੁਹਾਡੀ ਸਹਾਇਤਾ ਕਰਨ ਵਿੱਚ ਖੁਸ਼ ਹਾਂ! ਕਿਰਪਾ ਕਰਕੇ ਦੱਸੋ ਕਿ ਤੁਸੀਂ ਕਿਸ ਸ਼ਹਿਰ ਬਾਰੇ ਜਾਣਨਾ ਚਾਹੁੰਦੇ ਹੋ?",
            time: `ਮੌਜੂਦਾ ਸਮਾਂ ${new Date().toLocaleTimeString()} ਹੈ`,
            default: "ਮੈਂ ਸਮਝ ਗਿਆ ਕਿ ਤੁਸੀਂ ਮੇਰੇ ਨਾਲ ਗੱਲ ਕਰਨ ਦੀ ਕੋਸ਼ਿਸ਼ ਕਰ ਰਹੇ ਹੋ। ਕਿਰਪਾ ਕਰਕੇ ਆਪਣਾ ਸਵਾਲ ਦੁਬਾਰਾ ਪੁੱਛੋ? ਮੈਂ ਤੁਹਾਡੀ ਸਹਾਇਤਾ ਲਈ ਇੱਥੇ ਹਾਂ!"
        }
    },
    kn: {
        welcome: "ನಮಸ್ಕಾರ! ನಾನು ನಿಮ್ಮ AI ಸಹಾಯಕ. ಇಂದು ನಾನು ನಿಮಗೆ ಹೇಗೆ ಸಹಾಯ ಮಾಡಬಲ್ಲೆ?",
        placeholder: "ನಿಮ್ಮ ಸಂದೇಶವನ್ನು ಟೈಪ್ ಮಾಡಿ...",
        responses: {
            hello: "ನಮಸ್ಕಾರ! ನಿಮ್ಮನ್ನು ಭೇಟಿಯಾಗಲು ಸಂತೋಷವಾಗಿದೆ! ನೀವು ಹೇಗಿದ್ದೀರಿ?",
            help: "ನಿಮ್ಮ ಯಾವುದೇ ಪ್ರಶ್ನೆಗಳಿಗೆ ಸಹಾಯ ಮಾಡಲು ನಾನು ಇಲ್ಲಿದ್ದೇನೆ. ನೀವು ನನ್ನನ್ನು ಇವುಗಳ ಬಗ್ಗೆ ಕೇಳಬಹುದು:\n• ಹವಾಮಾನ ಮಾಹಿತಿ\n• ಪ್ರಸ್ತುತ ಸಮಯ\n• ಸಾಮಾನ್ಯ ಪ್ರಶ್ನೆಗಳು\n• ಕೆಲಸದ ಶಿಫಾರಸುಗಳು\n• ಮತ್ತು ಇನ್ನೂ ಹೆಚ್ಚು!",
            weather: "ಹವಾಮಾನ ಮಾಹಿತಿಯಲ್ಲಿ ನಿಮಗೆ ಸಹಾಯ ಮಾಡಲು ನನಗೆ ಸಂತೋಷವಾಗುತ್ತದೆ! ನೀವು ಯಾವ ನಗರದ ಬಗ್ಗೆ ತಿಳಿಯಲು ಬಯಸುತ್ತೀರಿ ಎಂದು ದಯವಿಟ್ಟು ಹೇಳಿ?",
            time: `ಪ್ರಸ್ತುತ ಸಮಯ ${new Date().toLocaleTimeString()}`,
            default: "ನೀವು ನನ್ನೊಂದಿಗೆ ಸಂವಹನ ನಡೆಸಲು ಪ್ರಯತ್ನಿಸುತ್ತಿದ್ದೀರಿ ಎಂದು ನಾನು ಅರ್ಥಮಾಡಿಕೊಂಡಿದ್ದೇನೆ. ದಯವಿಟ್ಟು ನಿಮ್ಮ ಪ್ರಶ್ನೆಯನ್ನು ಮರುಹೇಳಬಹುದೇ? ಸಹಾಯ ಮಾಡಲು ನಾನು ಇಲ್ಲಿದ್ದೇನೆ!"
        }
    },
    ta: {
        welcome: "வணக்கம்! நான் உங்கள் AI உதவியாளர். இன்று நான் உங்களுக்கு எப்படி உதவ முடியும்?",
        placeholder: "உங்கள் செய்தியை தட்டச்சு செய்யுங்கள்...",
        responses: {
            hello: "வணக்கம்! உங்களை சந்தித்ததில் மகிழ்ச்சி! நீங்கள் எப்படி இருக்கிறீர்கள்?",
            help: "உங்கள் எந்த கேள்விகளுக்கும் உதவ நான் இங்கே இருக்கிறேன். நீங்கள் என்னிடம் இவற்றைப் பற்றி கேட்கலாம்:\n• வானிலை தகவல்\n• தற்போதைய நேரம்\n• பொதுவான கேள்விகள்\n• வேலை பரிந்துரைகள்\n• மேலும் பலவும்!",
            weather: "வானிலை தகவலில் உங்களுக்கு உதவ நான் மகிழ்ச்சியடைவேன்! எந்த நகரத்தைப் பற்றி தெரிந்துகொள்ள விரும்புகிறீர்கள் என்று சொல்லுங்கள்?",
            time: `தற்போதைய நேரம் ${new Date().toLocaleTimeString()}`,
            default: "நீங்கள் என்னுடன் தொடர்பு கொள்ள முயற்சிக்கிறீர்கள் என்று புரிந்துகொள்கிறேன். உங்கள் கேள்வியை மீண்டும் கேட்க முடியுமா? உதவ நான் இங்கே இருக்கிறேன்!"
        }
    },
    te: {
        welcome: "నమస్కారం! నేను మీ AI సహాయకుడిని. ఈరోజు నేను మీకు ఎలా సహాయం చేయగలను?",
        placeholder: "మీ సందేశాన్ని టైప్ చేయండి...",
        responses: {
            hello: "నమస్కారం! మిమ్మల్ని కలవడం సంతోషం! మీరు ఎలా ఉన్నారు?",
            help: "మీ ఏదైనా ప్రశ్నలకు సహాయం చేయడానికి నేను ఇక్కడ ఉన్నాను. మీరు నన్ను ఇవాళ్లి గురించి అడగవచ్చు:\n• వాతావరణ సమాచారం\n• ప్రస్తుత సమయం\n• సాధారణ ప్రశ్నలు\n• ఉద్యోగ సిఫార్సులు\n• మరిన్ని!",
            weather: "వాతావరణ సమాచారంలో మీకు సహాయం చేయడంలో నేను సంతోషిస్తాను! ఏ నగరం గురించి తెలుసుకోవాలని అనుకుంటున్నారో దయచేసి చెప్పండి?",
            time: `ప్రస్తుత సమయం ${new Date().toLocaleTimeString()}`,
            default: "మీరు నాతో కమ్యూనికేట్ చేయడానికి ప్రయత్నిస్తున్నారని నేను అర్థం చేసుకున్నాను. దయచేసి మీ ప్రశ్నను మళ్ళీ అడగగలరా? సహాయం చేయడానికి నేను ఇక్కడ ఉన్నాను!"
        }
    }
};

// Job data
const jobsData = [
    {
        title: "Full Stack Developer",
        company: "TechCorp Solutions",
        location: "Bangalore",
        experience: "2-4 years",
        salary: "8-12 LPA",
        skills: ["React", "Node.js", "MongoDB", "JavaScript"],
        description: "We are looking for a talented Full Stack Developer to join our dynamic team and work on cutting-edge web applications.",
        matchScore: "95%"
    },
    {
        title: "Data Scientist",
        company: "Analytics Pro",
        location: "Mumbai",
        experience: "3-5 years",
        salary: "12-18 LPA",
        skills: ["Python", "Machine Learning", "SQL", "TensorFlow"],
        description: "Join our data science team to build predictive models and drive business insights using advanced analytics.",
        matchScore: "88%"
    },
    {
        title: "UI/UX Designer",
        company: "Design Studios",
        location: "Delhi",
        experience: "1-3 years",
        salary: "6-10 LPA",
        skills: ["Figma", "Adobe XD", "Prototyping", "User Research"],
        description: "Create intuitive and visually appealing user interfaces for our digital products and mobile applications.",
        matchScore: "82%"
    },
    {
        title: "DevOps Engineer",
        company: "CloudTech Inc",
        location: "Hyderabad",
        experience: "3-6 years",
        salary: "10-16 LPA",
        skills: ["AWS", "Docker", "Kubernetes", "Jenkins"],
        description: "Lead our infrastructure automation and deployment processes using modern DevOps practices and cloud technologies.",
        matchScore: "90%"
    },
    {
        title: "Mobile App Developer",
        company: "App Innovations",
        location: "Pune",
        experience: "2-5 years",
        salary: "7-13 LPA",
        skills: ["React Native", "Flutter", "iOS", "Android"],
        description: "Develop cross-platform mobile applications with focus on performance, user experience, and code quality.",
        matchScore: "85%"
    },
    {
        title: "Product Manager",
        company: "StartupXYZ",
        location: "Bangalore",
        experience: "4-7 years",
        salary: "15-25 LPA",
        skills: ["Product Strategy", "Agile", "Analytics", "Leadership"],
        description: "Drive product vision and strategy while collaborating with engineering and design teams to deliver exceptional user experiences.",
        matchScore: "78%"
    }
];

// Global variables
let currentLanguage = 'en';
let selectedFile = null;

// DOM elements
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('.section');
const languageSelector = document.getElementById('language-selection');
const chatInterface = document.getElementById('chat-interface');
const languageButtons = document.querySelectorAll('.language-btn');
const chatMessages = document.getElementById('chat-messages');
const messageInput = document.getElementById('message-input');
const sendButton = document.getElementById('send-button');
const changeLangBtn = document.getElementById('change-language');
const selectedLanguageSpan = document.getElementById('selected-language');
const welcomeMessage = document.getElementById('welcome-message');
const suggestionButtons = document.querySelectorAll('.suggestion-btn');
const uploadArea = document.getElementById('upload-area');
const resumeInput = document.getElementById('resume-input');
const uploadBtn = document.getElementById('upload-btn');
const jobRecommendations = document.getElementById('job-recommendations');
const jobList = document.getElementById('job-list');
const loadingOverlay = document.getElementById('loading-overlay');

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    initializeChatbot();
    initializeJobPortal();
    initializeHamburgerMenu();
});

// Navigation functionality
function initializeNavigation() {
    // Handle navigation clicks
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetSection = this.getAttribute('data-section');
            showSection(targetSection);
            
            // Update active nav link
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Handle hero button clicks
    const heroButtons = document.querySelectorAll('[data-section]');
    heroButtons.forEach(button => {
        if (!button.classList.contains('nav-link')) {
            button.addEventListener('click', function() {
                const targetSection = this.getAttribute('data-section');
                showSection(targetSection);
                
                // Update active nav link
                navLinks.forEach(l => l.classList.remove('active'));
                document.querySelector(`[data-section="${targetSection}"].nav-link`).classList.add('active');
            });
        }
    });
}

function showSection(sectionName) {
    sections.forEach(section => {
        section.classList.remove('active');
    });
    document.getElementById(sectionName).classList.add('active');
}

// Hamburger menu functionality
function initializeHamburgerMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
}

// Chatbot functionality
function initializeChatbot() {
    // Language selection
    languageButtons.forEach(button => {
        button.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            const langName = this.getAttribute('data-name');
            selectLanguage(lang, langName);
        });
    });

    // Change language button
    changeLangBtn.addEventListener('click', function() {
        chatInterface.style.display = 'none';
        languageSelector.style.display = 'block';
    });

    // Send message
    sendButton.addEventListener('click', sendMessage);
    messageInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });

    // Suggestion buttons
    suggestionButtons.forEach(button => {
        button.addEventListener('click', function() {
            const question = this.getAttribute('data-question');
            handleSuggestion(question);
        });
    });

    // Update placeholder text when language changes
    updateChatInterface();
}

function selectLanguage(lang, langName) {
    currentLanguage = lang;
    selectedLanguageSpan.textContent = langName;
    
    languageSelector.style.display = 'none';
    chatInterface.style.display = 'block';
    
    updateChatInterface();
}

function updateChatInterface() {
    const lang = translations[currentLanguage];
    welcomeMessage.textContent = lang.welcome;
    messageInput.placeholder = lang.placeholder;
}

function sendMessage() {
    const message = messageInput.value.trim();
    if (message === '') return;

    // Add user message
    addMessage(message, 'user');
    messageInput.value = '';

    // Generate bot response
    setTimeout(() => {
        const response = generateResponse(message);
        addMessage(response, 'bot');
    }, 1000);
}

function addMessage(message, sender) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${sender}-message`;
    
    const messageContent = document.createElement('div');
    messageContent.className = 'message-content';
    messageContent.innerHTML = `<p>${message}</p>`;
    
    messageDiv.appendChild(messageContent);
    chatMessages.appendChild(messageDiv);
    
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function handleSuggestion(question) {
    const lang = translations[currentLanguage];
    let message = '';
    
    switch(question) {
        case 'hello':
            message = question === 'hello' ? 'Hello' : lang.responses.hello;
            break;
        case 'help':
            message = 'Help me';
            break;
        case 'weather':
            message = 'What is the weather like?';
            break;
        case 'time':
            message = 'What time is it?';
            break;
    }
    
    messageInput.value = message;
    sendMessage();
}

function generateResponse(message) {
    const lang = translations[currentLanguage];
    const lowerMessage = message.toLowerCase();
    
    if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('hey') ||
        lowerMessage.includes('नमस्ते') || lowerMessage.includes('ਸਤ ਸ੍ਰੀ ਅਕਾਲ') ||
        lowerMessage.includes('ನಮಸ್ಕಾರ') || lowerMessage.includes('வணக்கம்') || lowerMessage.includes('నమస్కారం')) {
        return lang.responses.hello;
    } else if (lowerMessage.includes('help') || lowerMessage.includes('सहायता') || 
               lowerMessage.includes('ਸਹਾਇਤਾ') || lowerMessage.includes('ಸಹಾಯ') ||
               lowerMessage.includes('உதவி') || lowerMessage.includes('సహాయం')) {
        return lang.responses.help;
    } else if (lowerMessage.includes('weather') || lowerMessage.includes('मौसम') ||
               lowerMessage.includes('ਮੌਸਮ') || lowerMessage.includes('ಹವಾಮಾನ') ||
               lowerMessage.includes('வானிலை') || lowerMessage.includes('వాతావరణం')) {
        return lang.responses.weather;
    } else if (lowerMessage.includes('time') || lowerMessage.includes('समय') ||
               lowerMessage.includes('ਸਮਾਂ') || lowerMessage.includes('ಸಮಯ') ||
               lowerMessage.includes('நேரம்') || lowerMessage.includes('సమయం')) {
        return lang.responses.time;
    } else {
        return lang.responses.default;
    }
}

// Job Portal functionality
function initializeJobPortal() {
    // Upload button click
    uploadBtn.addEventListener('click', function() {
        resumeInput.click();
    });

    // File input change
    resumeInput.addEventListener('change', handleFileSelect);

    // Drag and drop functionality
    uploadArea.addEventListener('dragover', function(e) {
        e.preventDefault();
        this.classList.add('dragover');
    });

    uploadArea.addEventListener('dragleave', function(e) {
        e.preventDefault();
        this.classList.remove('dragover');
    });

    uploadArea.addEventListener('drop', function(e) {
        e.preventDefault();
        this.classList.remove('dragover');
        
        const files = e.dataTransfer.files;
        if (files.length > 0) {
            handleFile(files[0]);
        }
    });

    uploadArea.addEventListener('click', function() {
        resumeInput.click();
    });

    // Filter functionality
    const filters = ['location-filter', 'experience-filter', 'salary-filter'];
    filters.forEach(filterId => {
        const filter = document.getElementById(filterId);
        if (filter) {
            filter.addEventListener('change', filterJobs);
        }
    });
}

function handleFileSelect(e) {
    const file = e.target.files[0];
    if (file) {
        handleFile(file);
    }
}

function handleFile(file) {
    const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
    
    if (!allowedTypes.includes(file.type)) {
        alert('Please select a PDF, DOC, or DOCX file.');
        return;
    }

    if (file.size > 10 * 1024 * 1024) { // 10MB limit
        alert('File size should be less than 10MB.');
        return;
    }

    selectedFile = file;
    processResume();
}

function processResume() {
    if (!selectedFile) return;

    // Show loading overlay
    loadingOverlay.style.display = 'flex';

    // Simulate processing time
    setTimeout(() => {
        loadingOverlay.style.display = 'none';
        showJobRecommendations();
    }, 3000);
}

function showJobRecommendations() {
    jobRecommendations.style.display = 'block';
    renderJobs(jobsData);
}

function renderJobs(jobs) {
    jobList.innerHTML = '';
    
    jobs.forEach(job => {
        const jobCard = createJobCard(job);
        jobList.appendChild(jobCard);
    });
}

function createJobCard(job) {
    const card = document.createElement('div');
    card.className = 'job-card';
    
    card.innerHTML = `
        <div class="job-header">
            <div class="job-info">
                <h3 class="job-title">${job.title}</h3>
                <p class="company-name">${job.company}</p>
                <p class="job-location"><i class="fas fa-map-marker-alt"></i> ${job.location}</p>
            </div>
            <div class="match-score">${job.matchScore} Match</div>
        </div>
        
        <div class="job-details">
            <div class="job-detail">
                <i class="fas fa-briefcase"></i> ${job.experience}
            </div>
            <div class="job-detail">
                <i class="fas fa-rupee-sign"></i> ${job.salary}
            </div>
        </div>
        
        <p class="job-description">${job.description}</p>
        
        <div class="job-skills">
            ${job.skills.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
        </div>
        
        <div class="job-actions">
            <button class="btn-save" onclick="saveJob('${job.title}')">
                <i class="fas fa-bookmark"></i> Save
            </button>
            <button class="btn-apply" onclick="applyJob('${job.title}')">
                <i class="fas fa-paper-plane"></i> Apply Now
            </button>
        </div>
    `;
    
    return card;
}

function filterJobs() {
    const locationFilter = document.getElementById('location-filter').value;
    const experienceFilter = document.getElementById('experience-filter').value;
    const salaryFilter = document.getElementById('salary-filter').value;
    
    let filteredJobs = jobsData.filter(job => {
        let matches = true;
        
        if (locationFilter && job.location.toLowerCase() !== locationFilter.toLowerCase()) {
            matches = false;
        }
        
        if (experienceFilter && !job.experience.includes(experienceFilter.split('-')[0])) {
            matches = false;
        }
        
        if (salaryFilter) {
            const jobSalary = parseInt(job.salary.split('-')[0]);
            const filterRange = salaryFilter.split('-');
            const minSalary = parseInt(filterRange[0]);
            const maxSalary = filterRange[1] ? parseInt(filterRange[1]) : Infinity;
            
            if (jobSalary < minSalary || jobSalary > maxSalary) {
                matches = false;
            }
        }
        
        return matches;
    });
    
    renderJobs(filteredJobs);
}

// Job actions
function saveJob(jobTitle) {
    alert(`Job "${jobTitle}" has been saved to your favorites!`);
}

function applyJob(jobTitle) {
    alert(`Application submitted for "${jobTitle}"! You will receive a confirmation email shortly.`);
}

// Utility functions
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.classList.add('show');
    }, 100);
    
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Add smooth scrolling for better UX
document.documentElement.style.scrollBehavior = 'smooth';

// Add loading states for better UX
function showLoading(element) {
    element.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Processing...';
    element.disabled = true;
}

function hideLoading(element, originalText) {
    element.innerHTML = originalText;
    element.disabled = false;
}

// Handle window resize for responsive design
window.addEventListener('resize', function() {
    // Add any responsive adjustments if needed
});

// Add keyboard accessibility
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        // Close any open modals or overlays
        if (loadingOverlay.style.display === 'flex') {
            loadingOverlay.style.display = 'none';
        }
    }
});

// Performance optimization: Lazy load images
function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));
}

// Initialize lazy loading when DOM is ready
document.addEventListener('DOMContentLoaded', lazyLoadImages);