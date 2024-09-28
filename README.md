# Exam-Portal

This project is a simple **Quiz Application** developed using **React.js**. The application allows users to select a subject (Physics, Chemistry, or Mathematics) and attempt a quiz with randomly selected questions. Users can submit their answers and receive their score at the end.

## Features

- Users can choose a subject: **Physics**, **Chemistry**, or **Mathematics**.
- Randomly selects 10 questions from a predefined set of questions for each subject.
- Users can select answers to multiple-choice questions.
- Displays the final score as a popup after quiz submission.
- Modern UI with a clean, transparent design and centered layout.

## Technology Stack

- **Frontend:** React.js
- **Routing:** React Router
- **Styling:** CSS (custom styles with no external interference)
- **Dependencies:**
  - `react-router-dom`: For navigation between components
  - `Bootstrap`: For some UI components and layout

## Project Structure

```bash
.
├── public
├── src
│   ├── Components
│   │   ├── Home.jsx            # Home page with subject selection
│   │   ├── Quiz.jsx            # Subject selection component
│   │   ├── QuestionPage.jsx    # Page displaying quiz questions
│   │   ├── questions           # Folder containing hardcoded questions for each subject
│   │       ├── chemistry.js
│   │       ├── maths.js
│   │       └── physics.js
│   ├── App.js                  # Main application file
│   ├── index.js                # ReactDOM entry point
│   └── styles
│       ├── Home.css
│       ├── Quiz.css
│       └── QuestionPage.css
├── package.json
└── README.md
```

## Installation

  - Clone the repository:
      ```bash
      git clone https://github.com/yashpatil-25/exam-portal.git
      ```

  - Install dependencies:
      ```bash
      npm install
      ```

## Running the project
  ```bash
  npm run dev
  ```

## Flow Diagram

![Exam-Portal-Flow-Diagram](https://github.com/user-attachments/assets/2e6cb9fb-288e-4df0-b3b0-4f328cc7994d)

## Live Demo

[Exam-Portal](https://exam-portal-nu.vercel.app/)
