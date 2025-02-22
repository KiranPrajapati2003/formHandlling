🚀 React Form Handling using useState and Props

📌 Introduction

This project demonstrates how to handle forms in a React application using the useState hook and props for state management and data flow.

🌟 Overview

In this example, we create a simple form that captures user input and manages the form state using React's useState hook. The form data is then passed to child components via props, showcasing effective parent-child communication in React.

✨ Features

✅ useState Hook: Manage form state efficiently within functional components.

✅ Props: Pass data and event handlers to child components to handle user input and form submission.

✅ Controlled Components: Implement form elements whose values are controlled by React state.

🚀 Getting Started

Follow these steps to run the project locally:

📥 Clone the Repository

git clone https://github.com/KiranPrajapati2003/formHandlling.git
cd formHandlling

📦 Install Dependencies

Ensure you have Node.js installed, then run:

npm install

▶ Start the Development Server

npm start

The application should now be running on http://localhost:3000.

📂 Project Structure

src/
├── components/
│   ├── FormComponent.js
│   └── DisplayComponent.js
├── App.js
└── index.js

📌 FormComponent.js: Contains the form and manages input state using useState.

📌 DisplayComponent.js: Receives form data via props and displays it.

📌 App.js: Parent component that holds the main state and handles data flow between FormComponent and DisplayComponent.

🎯 Usage

✍ Filling the Form: Enter data into the form fields. As you type, the state updates accordingly.

📤 Form Submission: Upon submitting the form, the data is passed to the DisplayComponent and rendered on the screen.

📚 Learn More

🔗 React Docs: Forms

🔗 React Docs: Lifting State Up

🔗 React Docs: Hooks - useState

📜 License

This project is licensed under the MIT License. See the LICENSE file for details.
