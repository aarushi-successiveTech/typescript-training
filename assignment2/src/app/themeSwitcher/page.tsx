"use client";
import { createContext, useContext, useState, ReactNode } from "react";

type ThemeContextType = {
  theme: string;
  setTheme: (theme: string) => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

type ThemeProviderProps = {
  children: ReactNode;
};

const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState("light");
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const PageContext = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("PageContext must be used within a ThemeProvider");
  }

  const { theme, setTheme } = context;

  const pageStyle = {
    height: "100vh",
    margin: 0,
    padding: "20px",
    backgroundColor: theme === "light" ? "#ffffff" : "#121212",
    color: theme === "light" ? "#000000" : "#ffffff",
    transition: "background-color 0.3s ease, color 0.3s ease",
  };

  return (
    <div style={pageStyle}>
      <h2>Hi! Lets change the Theme here</h2>
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        Toggle Theme
      </button>
    </div>
  );
};

export const Page = () => {
  return (
    <ThemeProvider>
      <PageContext />
    </ThemeProvider>
  );
};
