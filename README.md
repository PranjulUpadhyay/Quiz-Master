# QuizMaster - Interactive Quiz Application

🚀 **Live Demo:** (https://quiz-master-ten-nu.vercel.app/)  
📁 **GitHub Repository:** (https://github.com/PranjulUpadhyay/Quiz-Master)

A modern, responsive React-based quiz application that provides an engaging trivia experience with timed challenges and detailed results. This project has been completely refactored and beautified for a premium user experience.

## ✨ Key Features

- **Modern UI Design**: Beautiful glass-morphism design with gradients and smooth animations
- **Timed Challenges**: 30-minute countdown timer with visual danger indicators
- **Smart Questions**: Questions fetched from Open Trivia Database API with local fallbacks
- **Interactive Navigation**: Overview panel showing question status (visited, attempted, current)
- **Email Validation**: Clean email input with real-time validation and loading states
- **Detailed Results**: Comprehensive score summary with color-coded performance metrics
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Question Management**: Navigate between questions with Previous/Next buttons
- **Progress Tracking**: Visual indicators for question completion status
- **Optimized Performance**: Cleaned up codebase with removed unused dependencies

## 🚀 Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/PranjulUpadhyay/Quiz-Master.git
   cd my-quiz-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to start using the quiz app

## 📁 Project Structure

```
my-quiz-app/
├── public/
│   ├── favicon.ico
│   ├── index.html
│   ├── manifest.json
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── EmailInput.js       # Email validation and input component
│   │   ├── OverviewPanel.js    # Question navigation panel
│   │   ├── Question.js         # Individual question display
│   │   ├── QuizPage.js         # Main quiz interface
│   │   ├── ReportPage.js       # Results and scoring page
│   │   ├── StartPage.js        # Welcome page with features
│   │   └── Timer.js            # Countdown timer component
│   ├── utils/
│   │   ├── fetchQuestions.js   # API integration with fallback questions
│   │   └── shuffleArray.js     # Array shuffling utility
│   ├── App.js                  # Main application component
│   ├── index.js               # Application entry point
│   ├── styles.css             # Global styles and modern theme
│   └── reportWebVitals.js     # Performance monitoring (unused but kept for compatibility)
├── package.json
└── README.md
```

```

## 🛠️ Available Scripts

### `npm start`
Runs the app in development mode at [http://localhost:3000](http://localhost:3000)

### `npm run build`
Builds the app for production to the `build` folder with optimized performance

### `npm run eject`
**Note: This is a one-way operation!** Ejects from Create React App configuration

The app uses the [Open Trivia Database API](https://opentdb.com/) to fetch 15 random questions. If the API is unavailable, it automatically falls back to a curated set of local questions to ensure the quiz always works.

### Dependencies (Minimized)
```json
{
  "react": "^18.2.0",
  "react-dom": "^18.2.0", 
  "react-scripts": "5.0.1"
}
```

## 📱 Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

**Enjoy testing your knowledge with QuizMaster! 🧠✨**
