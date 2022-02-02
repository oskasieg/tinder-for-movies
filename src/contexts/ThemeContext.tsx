import React, { createContext, useEffect, useState } from "react";

interface IThemeContext {
  theme: string;
  toggleTheme: () => void;
}

const defaultState = {
  theme: "light",
  toggleTheme: () => {},
};

export const ThemeContext = createContext<IThemeContext>(defaultState);

const ThemeProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = useState<string>("");

  useEffect(() => {
    const storageTheme = localStorage.getItem("theme");

    if (!storageTheme) {
      localStorage.setItem("theme", "light");
      document.documentElement.style.setProperty(
        "--bodyBackgroundColor",
        "#bebebe"
      );
      setTheme("light");
    } else {
      switch (storageTheme) {
        case "light": {
          document.documentElement.style.setProperty(
            "--bodyBackgroundColor",
            "#bebebe"
          );
          break;
        }

        case "dark": {
          document.documentElement.style.setProperty(
            "--bodyBackgroundColor",
            "#1a171d"
          );
          break;
        }
      }

      setTheme(storageTheme);
    }
  }, []);
  console.log(theme);
  const toggleTheme = () => {
    console.log(theme);
    if (theme === "light") {
      setTheme("dark");
      localStorage.setItem("theme", "dark");
      document.documentElement.style.setProperty(
        "--bodyBackgroundColor",
        "#1a171d"
      );
    } else if (theme === "dark") {
      setTheme("light");
      localStorage.setItem("theme", "light");
      document.documentElement.style.setProperty(
        "--bodyBackgroundColor",
        "#bebebe"
      );
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
