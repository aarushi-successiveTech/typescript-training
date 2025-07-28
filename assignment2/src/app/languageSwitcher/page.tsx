"use client";
import { useState, useContext, createContext, ReactNode } from "react";

type LanguageContextType = {
  language: string;
  changeLanguage: (lang: string) => void;
};
const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

type LanguageProviderTypes = {
  children: ReactNode;
};

const LanguageProvider = ({ children }: LanguageProviderTypes) => {
  const [language, setLanguage] = useState<string>("en");

  const changeLanguage = (lang: string) => {
    setLanguage(lang);
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

const Content = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("context not found!");
  }
  const { language } = context;

  const messages: Record<string, { greeting: string }> = {
    en: {
      greeting: "Hello! Welcome to the app.",
    },
    es: {
      greeting: "¡Hola! Bienvenido a la aplicación.",
    },
  };

  return <h3>{messages[language].greeting}</h3>;
};

const LanguageButtons = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("LanguageButtons must be used within a LanguageProvider");
  }
  const { changeLanguage } = context;

  return (
    <div>
      <button
        onClick={() => changeLanguage("en")}
        style={{ marginRight: "10px" }}
      >
        English
      </button>
      <button onClick={() => changeLanguage("es")}>Spanish</button>
    </div>
  );
};

export default function Page() {
  return (
    <LanguageProvider>
      <div style={{ padding: "20px", textAlign: "center" }}>
        <h2>Language Switcher</h2>
        <LanguageButtons />
        <Content />
      </div>
    </LanguageProvider>
  );
}
