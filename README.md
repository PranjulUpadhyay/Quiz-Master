# QuizMaster - Interactive Quiz Application

A modern, responsive React-based quiz application that provides an engaging trivia experience with timed challenges and detailed results.

## ✨ Features

- **Modern UI Design**: Beautiful glass-morphism design with gradients and smooth animations
- **Timed Challenges**: 30-minute countdown timer with visual danger indicators
- **Smart Questions**: Questions fetched from Open Trivia Database API with local fallbacks
- **Interactive Navigation**: Overview panel showing question status (visited, attempted, current)
- **Email Validation**: Clean email input with real-time validation
- **Detailed Results**: Comprehensive score summary with color-coded performance metrics
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Question Management**: Navigate between questions with Previous/Next buttons
- **Progress Tracking**: Visual indicators for question completion status

## 🚀 Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
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
│   └── styles.css             # Global styles and theme
├── package.json
└── README.md
```

```

## 🎮 How to Use

1. **Start**: Enter your email address on the welcome page
2. **Quiz**: Answer questions within the 30-minute time limit
3. **Navigate**: Use the overview panel or Previous/Next buttons to move between questions
4. **Submit**: Complete the quiz and view your detailed results

## 🎯 Quiz Flow

### Welcome Page
- Modern welcome interface with feature highlights
- Email input with validation
- Loading state while fetching questions

### Quiz Interface
- Clean, compact layout with no scrolling needed
- Question counter showing current position
- Live countdown timer with danger state (red when < 1 minute)
- Overview panel with color-coded question status:
  - **Gray**: Unvisited
  - **Blue**: Visited but not attempted
  - **Green**: Attempted (answered)
  - **Yellow**: Current question

### Results Page
- Overall score percentage with performance message
- Color-coded score circle (excellent/good/average/poor)
- Detailed statistics (correct, incorrect, total)
- Question-by-question breakdown table

## 🛠️ Available Scripts

### `npm start`
Runs the app in development mode at [http://localhost:3000](http://localhost:3000)

### `npm run build`
Builds the app for production to the `build` folder with optimized performance

### `npm run eject`
**Note: This is a one-way operation!** Ejects from Create React App configuration

## 🌐 API Integration

The app uses the [Open Trivia Database API](https://opentdb.com/) to fetch 15 random questions. If the API is unavailable, it automatically falls back to a curated set of local questions to ensure the quiz always works.

## 🎨 Design Features

- **Glass-morphism UI**: Modern frosted glass effect with subtle shadows
- **Gradient Backgrounds**: Beautiful color transitions throughout the interface
- **Responsive Design**: Seamlessly adapts to different screen sizes
- **Smooth Animations**: Polished user experience with CSS transitions
- **Accessible**: Proper ARIA labels and keyboard navigation support

## 🔧 Technical Details

- **React 18**: Built with the latest React features and hooks
- **No External UI Libraries**: Custom CSS implementation for full control
- **Error Handling**: Graceful fallbacks for API failures
- **State Management**: Efficient React state handling without external libraries
- **Performance Optimized**: Minimal bundle size and fast loading

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
