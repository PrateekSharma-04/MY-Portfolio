import { useState, useMemo, useEffect } from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { lightTheme, darkTheme } from "../theme/theme.js";
import { ThemeContext } from "./ThemeContext.js";

export default function ThemeContextProvider({ children }) {
  const [isDark, setIsDark] = useState(false);
  const theme = useMemo(() => (isDark ? darkTheme : lightTheme), [isDark]);

  useEffect(() => {
    document.body.classList.toggle("dark", isDark);
  }, [isDark]);

  return (
    <ThemeContext.Provider value={{ isDark, setIsDark }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}
