"use client";

import { useState } from "react";

type QuestionKey =
  | "Question1"
  | "Question2"
  | "Question3"
  | "Question4"
  | "Question5"
  | "Question6";

const Questions: React.FC = () => {
  const [question, setQuestion] = useState<QuestionKey>();

  const descriptions: Record<QuestionKey, string> = {
    Question1: `create two components: a parent component that acts as a provider and a child component that consumes the context.
Create a context to manage a user's authentication status (logged in or out).
Implement a login button in the child component that, when clicked, updates the authentication status in the context to "logged in."
Display a message in the child component based on the user's authentication status. If the user is logged in, show "Welcome, [username]!" Otherwise, display "Please log in.`,

    Question2: `Extend the previous application to demonstrate the use of nested contexts.
Create a new context to manage user preferences (e.g., theme preference).
Modify the parent component to provide both the authentication and preferences contexts.
Create a child component that consumes both contexts.
Allow the user to change their theme preference (light/dark) using a button in the child component.
Display the theme preference in the UI and adjust the component's styling accordingly.`,

    Question3: `creat pages: Home and About.
Implement file routing.
Create navigation links to switch between the Home and About pages.
Display appropriate content on each page.
Add a "404 Not Found" page for any invalid routes.`,

    Question4: `Enhance the previous application by adding protected pages that require authentication.
Create a login page with a form that accepts a username and password.
Implement authentication logic (e.g., hardcode a username and password for now).
Secure the About page so that it can only be accessed by authenticated users.
Redirect unauthenticated users to the login page.
Display a message on the Home page welcoming the authenticated user.`,

    Question5: `Extend the application to include nested routes for a more complex user interface.
Create a new section of your application (e.g., a Dashboard) with multiple sub-pages (e.g., Dashboard, Profile, Settings).
Implement nested routing within this section using nested routes.
Add navigation links to switch between the sub-pages within the Dashboard section.
Customize the content displayed on each sub-page.`,

    Question6: `Create a list of items (e.g., products, articles) in your application.
Implement dynamic routing to display details for each item when clicked.
Create a route parameter that represents the item's ID in the URL (e.g., "/products/:id").
Fetch item details based on the route parameter and display them on the detail page.
Add a "Go Back" button on the detail page to return to the list.`,
  };
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>assignment3 questions</h1>
      <br />
      <button
        onClick={() => setQuestion("Question1")}
        style={{
          marginRight: "15px",
          marginLeft: "525px",
          padding: "16px 30px",
        }}
      >
        Question1
      </button>
      <button
        onClick={() => setQuestion("Question2")}
        style={{ marginRight: "15px", padding: "16px 30px" }}
      >
        Question2
      </button>
      <button
        onClick={() => setQuestion("Question3")}
        style={{ marginRight: "15px", padding: "16px 30px" }}
      >
        Question3
      </button>
      <button
        onClick={() => setQuestion("Question4")}
        style={{ marginRight: "15px", padding: "16px 30px" }}
      >
        Question4
      </button>
      <button
        onClick={() => setQuestion("Question5")}
        style={{ marginRight: "15px", padding: "16px 30px" }}
      >
        Question5
      </button>
      <button
        onClick={() => setQuestion("Question6")}
        style={{ marginRight: "15px", padding: "16px 30px" }}
      >
        Question6
      </button>

      <br />

      <div style={{ textAlign: "center", padding: "150px ", fontSize: "22px" }}>
        <p>{question ? descriptions[question] : "Please select a question."}</p>
      </div>
    </div>
  );
};

export default Questions;
